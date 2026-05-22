# localStorage Debug 日志指南

## 添加的日志

### 1. `lib/storage.ts`

#### `safeGet` 函数
- `[safeGet] START` - 开始读取，显示 key 和 fallback
- `[safeGet] NOT IN BROWSER` - 非浏览器环境，返回 fallback
- `[safeGet] raw from localStorage` - 从 localStorage 读取的原始值
- `[safeGet] raw is null` - localStorage 中没有该 key
- `[safeGet] SUCCESS` - 成功解析 JSON
- `[safeGet] READ FAILED` - 读取失败（权限/隐私模式）
- `[safeGet] PARSE FAILED` - JSON 解析失败

#### `safeSet` 函数
- `[safeSet] START` - 开始写入，显示 key 和 value
- `[safeSet] NOT IN BROWSER` - 非浏览器环境，跳过写入
- `[safeSet] serialized` - 序列化后的 JSON 字符串
- `[safeSet] SUCCESS` - 成功写入 localStorage
- `[safeSet] WRITE FAILED` - 写入失败（权限/隐私模式/配额）

### 2. `lib/useLocalStorageState.ts`

#### `useEffect` (mount effect)
- `[useLocalStorageState] mount effect` - useEffect 触发
- `[useLocalStorageState] queueMicrotask START` - 开始异步读取
- `[useLocalStorageState] after safeGet` - safeGet 返回的值
- `[useLocalStorageState] after setState` - setState 调用完成
- `[useLocalStorageState] queueMicrotask END` - 异步读取完成，isHydrated 设为 true

#### `setStateAndStorage` 函数
- `[setStateAndStorage] CALLED` - 函数被调用
- `[setStateAndStorage] setState callback` - setState 回调执行，显示 prev
- `[setStateAndStorage] next` - 计算出的新状态
- `[setStateAndStorage] CALLING safeSet` - 准备写入 localStorage
- `[setStateAndStorage] SKIPPED safeSet` - 跳过写入（isHydrated 为 false）

### 3. `components/layout/DashboardClientShell.tsx`

#### `handleTaskToggle` 函数
- `[handleTaskToggle] CALLED` - 函数被调用，显示 id 和当前 taskStatus
- `[handleTaskToggle] setTaskStatus callback` - setTaskStatus 回调执行，显示 prev
- `[handleTaskToggle] next` - 计算出的新状态

## 如何测试

### 1. 启动开发服务器
```bash
cd /c/Users/张德帅/lifeos/web-phase-4-1
npm run dev
```

### 2. 打开浏览器控制台
- 打开 http://localhost:3000
- 按 F12 打开开发者工具
- 切换到 Console 标签

### 3. 观察初始化日志
页面加载时应该看到：
```
[useLocalStorageState] mount effect, key: lifeos:v1:taskStatus, isFirstMount: true
[useLocalStorageState] queueMicrotask START, isHydrated: false
[safeGet] START, key: lifeos:v1:taskStatus, fallback: {...}
[safeGet] raw from localStorage: null (或实际值)
[useLocalStorageState] after safeGet, stored: {...}
[useLocalStorageState] after setState
[useLocalStorageState] queueMicrotask END, isHydrated: true
```

### 4. 测试任务勾选
勾选一个任务时应该看到：
```
[handleTaskToggle] CALLED, id: task-1, current taskStatus: {...}
[handleTaskToggle] setTaskStatus callback, prev: {...}
[handleTaskToggle] next: {...}
[setStateAndStorage] CALLED, isHydrated: true
[setStateAndStorage] setState callback, prev: {...}
[setStateAndStorage] next: {...}
[setStateAndStorage] CALLING safeSet
[safeSet] START, key: lifeos:v1:taskStatus, value: {...}
[safeSet] serialized: "{...}"
[safeSet] SUCCESS, written to localStorage
```

### 5. 验证 localStorage
在控制台执行：
```javascript
localStorage.getItem('lifeos:v1:taskStatus')
```

应该返回 JSON 字符串，而不是 `null`。

## 诊断问题

### 问题 1：`safeSet` 没有被调用
**症状**：勾选任务后，控制台没有 `[safeSet] START` 日志

**可能原因**：
- `isHydrated.current` 为 `false`
- 检查是否有 `[setStateAndStorage] SKIPPED safeSet` 日志

**解决方案**：
- 确认 `queueMicrotask` 执行完成
- 确认 `isHydrated.current` 被设为 `true`

### 问题 2：`safeSet` 被调用但写入失败
**症状**：有 `[safeSet] START` 但没有 `[safeSet] SUCCESS`

**可能原因**：
- 浏览器隐私模式
- localStorage 配额已满
- 浏览器权限问题

**解决方案**：
- 检查 `[safeSet] WRITE FAILED` 日志中的错误信息
- 尝试在普通模式下打开浏览器
- 清理 localStorage：`localStorage.clear()`

### 问题 3：`safeSet` 成功但 localStorage 仍为 null
**症状**：有 `[safeSet] SUCCESS` 但 `localStorage.getItem()` 返回 `null`

**可能原因**：
- 浏览器扩展拦截
- 浏览器安全策略
- localStorage 被其他代码清空

**解决方案**：
- 禁用浏览器扩展
- 检查是否有其他代码调用 `localStorage.clear()` 或 `localStorage.removeItem()`

## 移除日志

测试完成后，使用以下命令移除所有 debug 日志：

```bash
cd /c/Users/张德帅/lifeos/web-phase-4-1
git checkout lib/storage.ts lib/useLocalStorageState.ts components/layout/DashboardClientShell.tsx
```

或者手动删除所有包含以下内容的行：
- `console.log('[safeGet]`
- `console.log('[safeSet]`
- `console.log('[useLocalStorageState]`
- `console.log('[setStateAndStorage]`
- `console.log('[handleTaskToggle]`
- `console.warn('[safeGet]`
- `console.warn('[safeSet]`
- `console.warn('[setStateAndStorage]`
- `console.error('[safeGet]`
- `console.error('[safeSet]`

## 统计

- **修改文件数**：3
- **添加日志行数**：约 30 行
- **日志级别**：console.log（信息）、console.warn（警告）、console.error（错误）
