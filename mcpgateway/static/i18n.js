/**
 * Simple client-side i18n for MCP Gateway
 */

const translations = {
    "zh": {
        // Virtual Servers
        "Virtual MCP Servers": "虚拟 MCP 服务器",
        "Virtual Servers let you combine Tools, Resources, and Prompts into an MCP Server with its own API key (see API Tokens).": "虚拟服务器允许您将工具、资源和提示词组合成一个带有独立 API 密钥的 MCP 服务器 (参见 API 令牌)。",
        "Custom UUID (optional)": "自定义 UUID (可选)",
        "Leave blank to auto-generate": "留空以自动生成",
        "Provide a custom UUID if you need to preserve an existing server ID": "如果需要保留现有服务器 ID，请提供自定义 UUID",
        "Icon URL": "图标 URL",
        "Choose an MCP server, then select the tools, resources, and prompts to configure your virtual server.": "选择一个 MCP 服务器，然后选择工具、资源和提示词以配置您的虚拟服务器。",
        "Associated Tools": "关联工具",
        "Associated Resources": "关联资源",
        "Associated Prompts": "关联提示词",
        "Search for tools...": "搜索工具...",
        "Search for resources...": "搜索资源...",
        "Search for prompts...": "搜索提示词...",
        "Select All": "全选",
        "Clear All": "全部清除",
        "Submitting...": "正在提交...",
        "Add New Server": "添加新服务器",
        "Name is required.": "名称为必填项。",
        "No tool found containing": "未找到包含此内容的工具",
        "Search for MCP servers...": "搜索 MCP 服务器...",
        "e.g., development,production,api-gateway (comma-separated)": "例如：development,production,api-gateway (逗号分隔)",
        "Enter tags separated by commas. Tags help categorize and filter servers.": "输入以逗号分隔的标签。标签有助于对服务器进行分类和筛选。",
        "Enable OAuth 2.0 for MCP Client Authentication": "启用 OAuth 2.0 进行 MCP 客户端身份验证",
        "When enabled, MCP clients can authenticate using browser-based OAuth/SSO per RFC 9728.": "启用后，MCP 客户端可以根据 RFC 9728 使用基于浏览器的 OAuth/SSO 进行身份验证。",
        "Authorization Server URL": "授权服务器 URL",
        "The OAuth 2.0 authorization server URL (e.g., your Identity Provider)": "OAuth 2.0 授权服务器 URL (例如：您的身份提供商)",
        "Scopes (space-separated)": "范围 (空格分隔)",
        "OAuth scopes to request (e.g., openid profile email)": "请求的 OAuth 范围 (例如：openid profile email)",
        "Token Endpoint URL (optional)": "令牌端点 URL (可选)",
        "Leave blank to use standard discovery from authorization server": "留空以使用授权服务器的标准发现功能",
        "Showing": "显示",
        "items": "条目",
        "No tags found": "未找到标签",
        "of": "共",
        // Sidebar
        "Overview": "概览",
        "MCP Servers": "MCP 服务器",
        "Virtual Servers": "虚拟服务器",
        "Tools": "工具",
        "ToolOps": "工具运维",
        "Prompts": "提示词",
        "Resources": "资源",
        "Roots": "根路径",
        "MCP Registry": "MCP 注册表",
        "Agents (A2A)": "代理 (A2A)",
        "gRPC Services": "gRPC 服务",
        "LLM Chat": "LLM 对话",
        "LLM Settings": "LLM 设置",
        "Metrics": "指标",
        "Performance": "性能",
        "Observability": "可观测性",
        "Users & Teams": "用户与团队",
        "Activity": "活动",
        "Session & Activity": "会话与活动",
        "Sessions & Activity": "会话与活动",
        "Metrics Collection": "指标收集",
        "Audit & Events": "审计与事件",
        "Workflow State": "工作流状态",
        "Plugins": "插件",
        "Teams": "团队",
        "Users": "用户",
        "API Tokens": "API 令牌",
        "Export/Import": "导出/导入",
        "System Logs": "系统日志",
        "Version Info": "版本信息",
        "Maintenance": "维护",

        // Header
        "Gateway Administration": "网关管理",
        "All Teams": "所有团队",
        "Logout": "退出登录",
        "Switch to dark mode": "切换到深色模式",
        "Switch to light mode": "切换到浅色模式",

        // Validation
        "Prompt name can only contain letters, numbers, spaces, underscores, hyphens, and dots": "提示词名称只能包含字母、数字、空格、下划线、连字符和点",

        // Common
        "Name": "名称",
        "Description": "描述",
        "Loading...": "加载中...",
        "Search...": "搜索...",
        "Actions": "操作",
        "Status": "状态",
        "Enabled": "已启用",
        "Disabled": "已禁用",
        "Search teams...": "搜索团队...",
        "Search or paste correlation ID...": "搜索或粘贴关联 ID...",
        "Are you sure you want to logout?": "您确定要退出登录吗？",
        "Search Logs": "搜索日志",
        "Trace Correlation ID": "追踪关联 ID",
        "Security Events": "安全事件",
        "Audit Trail": "审计追踪",
        "Loading teams...": "正在加载团队...",
        "Time": "时间",
        "Level": "级别",
        "Component": "组件",
        "Message": "消息",
        "User": "用户",
        "Duration": "时长",
        "Correlation ID": "关联 ID",
        "Previous": "上一页",
        "Next": "下一页",
        "Success": "成功",
        "Error": "错误",
        "Warning": "警告",
        "Info": "信息",

        // Export/Import
        "Configuration Export & Import": "配置导出与导入",
        "Export Configuration": "导出配置",
        "Import Configuration": "导入配置",
        "Export All Configuration": "导出所有配置",
        "Export Selected Types": "导出选中类型",
        "Entity Types": "实体类型",
        "Include Inactive": "包括未启用的",
        "Include Dependencies": "包括依赖项",
        "Filter by Tags": "按标签过滤",
        "Comma-separated tags": "逗号分隔的标签",
        "Dry Run (validate only)": "试运行 (仅验证)",
        "Conflict Strategy": "冲突策略",
        "Update existing items": "更新现有项目",
        "Skip conflicting items": "跳过冲突项目",
        "Rename conflicting items": "重命名冲突项目",
        "Fail on conflicts": "冲突时失败",
        "Import File": "导入文件",
        "Click to upload": "点击上传",
        "or drag and drop": "或拖放文件至此",
        "JSON export files only": "仅限 JSON 导出文件",
        "All Levels": "所有级别",
        "All Components": "所有组件",
        "Import Status": "导入状态",
        "Progress": "进度",
        "Total": "总计",
        "Created": "已创建",
        "Updated": "已更新",
        "Failed": "失败",
        "Recent Import Operations": "最近的导入操作",
        "Selective Import": "选择性导入",
        "Validate Import": "验证导入",
        "Execute Import": "执行导入",

        // Overview
        "System Overview": "系统概览",
        "Uptime": "运行时间",
        "Total Executions": "总执行次数",
        "Success Rate": "成功率",
        "Avg Latency": "平均延迟",
        "Active Entities": "活跃实体",
        "Architecture Flow": "架构流程",
        "INPUTS": "输入",
        "GATEWAY": "网关",
        "OUTPUTS": "输出",
        "INFRASTRUCTURE": "基础设施",
        "plugins enabled": "插件已启用",
        "Auth": "认证",
        "Rate Limit": "频率限制",
        "Connected": "已连接",
        "Disconnected": "已断开",
        "In-Memory": "内存中",
        "active": "活跃",
        "enabled": "已启用",
        "Composite MCP endpoints": "复合 MCP 端点",
        "Registered tool endpoints": "注册工具端点",
        "Middleware (Plugins)": "中间件 (插件)",
        "A2A Agents": "A2A 代理",
        "Middleware extensions": "中间件扩展",
        "Total Requests": "总请求数",
        "Active Connections": "活跃连接",
        "Memory Usage": "内存使用率",
        "CPU Usage": "CPU 使用率",
        "Disk Usage": "磁盘使用率",
        "Network In": "网络流入",
        "Network In": "网络流入",
        "Network Out": "网络流出",
        "Total Users": "总用户数",
        "active": "活跃",
        "Total Teams": "总团队数",
        "Total Metrics": "总指标数",
        "token logs": "令牌日志",
        "Token Logs": "令牌日志",
        "tools": "工具",
        "Virtual Servers": "虚拟服务器",
        "Gateway Peers": "网关节点",
        "Revoked": "已撤销",
        "MCP Sessions": "MCP 会话",
        "MCP Messages": "MCP 消息",
        "Subscriptions": "订阅",
        "OAuth Tokens": "OAuth 令牌",
        "Tool Metrics": "工具指标",
        "Resource Metrics": "资源指标",
        "Prompt Metrics": "提示词指标",
        "Server Metrics": "服务器指标",
        "A2A Metrics": "A2A 指标",
        "Auth Events": "认证事件",
        "Audit Logs": "审计日志",
        "Pending Approvals": "待批准",
        "SSO Providers": "SSO 提供商",
        "Team Invitations": "团队邀请",
        "Personal": "个人",
        "Organizational": "组织",
        "Team Members": "团队成员",

        // LLM Settings
        "Providers": "提供者",
        "Models": "模型",
        "Test": "测试",
        "Loading LLM providers...": "正在加载 LLM 提供者...",
        "Loading LLM models...": "正在加载 LLM 模型...",
        "Loading test panel...": "正在加载测试面板...",
        "Add LLM Provider": "添加 LLM 提供者",
        "Name *": "名称 *",
        "Provider Type *": "提供者类型 *",
        "Select provider type": "选择提供者类型",
        "API Key": "API 密钥",
        "Leave blank to keep existing": "留空则保持现有密钥",
        "API Base URL": "API 基准 URL",
        "Auto-filled based on provider type": "根据提供者类型自动填写",

        // Toast & Context Messages
        "Syncing models...": "正在同步模型...",
        "Failed to load provider details": "无法加载提供者详情",
        "Provider deleted successfully": "成功删除提供者",
        "Failed to delete provider": "无法删除提供者",
        "Failed to toggle provider": "无法切换提供者状态",
        "Please select a provider first": "请先选择一个提供者",
        "Failed to load model details": "无法加载模型详情",
        "Model deleted successfully": "成功删除模型",
        "Failed to delete model": "无法删除模型",
        "Are you sure you want to delete this provider? This will also delete all associated models.": "您确定要删除此提供者吗？这将同时删除所有关联的模型。",
        "Are you sure you want to delete this model?": "您确定要删除此模型吗？",

        // Loading states
        "Loading performance dashboard...": "正在加载性能仪表板...",
        "Loading observability dashboard...": "正在加载可观测性仪表板...",
        "Loading tools...": "正在加载工具...",
        "Loading servers...": "正在加载服务器...",
        "Loading resources...": "正在加载资源...",
        "Loading prompts...": "正在加载提示词...",
        "Loading overview...": "正在加载概览...",
        "Loading gateways...": "正在加载网关...",

        // Metrics / Dashboard
        "Successful Executions": "执行成功次数",
        "Failed Executions": "执行失败次数",
        "Failure Rate": "失败率",
        "Average Response Time": "平均响应时间",
        "Last Execution Time": "最后执行时间",
        "Tools Metrics": "工具指标",
        "Resources Metrics": "资源指标",
        "Prompts Metrics": "提示词指标",
        "Gateways Metrics": "网关指标",
        "Servers Metrics": "服务器指标",
        "Performance Metrics": "性能指标",

        // MCP Registry
        "MCP Registry": "MCP 注册表",
        "Registered": "已注册",
        "Refresh": "刷新",
        "Total Servers": "总服务器数",
        "Authentication Types": "身份验证类型",
        "Search servers via tags...": "通过标签搜索服务器...",
        "Page": "第",
        "of": "页，共",
        "Provider:": "提供商：",
        "URL:": "URL：",
        "OAuth Config Required": "需要 OAuth 配置",
        "Already Registered": "已注册",
        "Register Server": "注册服务器",
        "No servers match your current filters.": "没有匹配当前过滤条件的服务器。",
        "Custom Name (Optional)": "自定义名称 (可选)",
        "Use one-time authentication": "使用一次性身份验证",
        "Passthrough Headers": "透传请求头",
        "List of headers to pass through from client requests (comma-separated, e.g., \"Authorization, X-Tenant-Id, X-Trace-Id\"). Leave empty to use global defaults.": "从客户端请求透传的请求头列表 (逗号分隔，例如 \"Authorization, X-Tenant-Id, X-Trace-Id\")。留空则使用全局默认设置。",
        "Authorization, X-Tenant-Id, X-Trace-Id": "Authorization, X-Tenant-Id, X-Trace-Id",
        "Upload CA certificate": "上传 CA 证书",
        "Click to upload": "点击上传",
        "or drag and drop": "或拖放文件至此",
        "Public certificate files only (.pem, .crt, .cer, .cert)": "仅限公共证书文件 (.pem, .crt, .cer, .cert)",
        "Separate multiple tags with commas. Tags will be automatically normalized (lowercase, spaces→hyphens).": "用逗号分隔多个标签。标签将自动规范化 (小写，空格→连字符)。",
        "e.g., production,external,api-gateway (comma-separated)": "例如：production,external,api-gateway (逗号分隔)",
        "Authentication Type": "身份验证类型",
        "Custom Headers": "自定义请求头",
        "Add Header": "添加请求头",
        "Show": "显示",

        // MCP Servers / Gateways
        "MCP Servers & Federated Gateways (MCP Registry)": "MCP 服务器与联邦网关 (MCP 注册表)",
        "Register external MCP Servers (SSE/HTTP) to retrieve their tools/resources/prompts.": "注册外部 MCP 服务器 (SSE/HTTP) 以检索其工具/资源/提示词。",
        "Show Inactive": "显示未启用",
        "Search MCP servers...": "搜索 MCP 服务器...",
        "S. No.": "序号",
        "URL": "URL",
        "Tags": "标签",
        "Last Seen": "上次在线",
        "Owner": "所有者",
        "Team": "团队",
        "Visibility": "可见性",
        "Add New MCP Server or Gateway": "添加新的 MCP 服务器或网关",
        "MCP Server Name": "MCP 服务器名称",
        "MCP Server URL": "MCP 服务器 URL",
        "Public": "公开",
        "Private": "私有",
        "Transport Type": "传输类型",
        "Authentication Type": "认证类型",
        "None": "无",
        "Basic": "基础认证 (Basic)",
        "Bearer Token": "令牌认证 (Bearer)",
        "Custom Headers": "自定义请求头",
        "OAuth 2.0": "OAuth 2.0",
        "Query Parameter (INSECURE)": "URL 参数 (不安全)",
        "Add Gateway": "添加网关",
        "Test": "测试",
        "View": "查看",
        "Edit": "编辑",
        "Deactivate": "停用",
        "Activate": "激活",
        "Delete": "删除",
        "Fetch Tools": "获取工具",
        "Authorize": "授权",
        "Clear": "清除",

        // Prompts
        "MCP Resources": "MCP 资源",
        "Resources are reusable data assets from MCP servers-like text, code, or media. You can also add custom resources that Tools and Prompts can reference by URI.": "资源是来自 MCP 服务器的可重用数据资产，例如文本、代码或媒体。您还可以添加工具和提示词可以通过 URI 引用的自定义资源。",
        "Search resources via tags...": "通过标签搜索资源...",
        "Add New Resource": "添加新资源",
        "URI": "URI",
        "MIME Type": "MIME 类型",
        "Content": "内容",
        "Add Resource": "添加资源",

        // Prompts
        "MCP Prompts": "MCP 提示词",
        "Prompts define reusable message templates with parameters from MCP servers. You can also add custom prompts, useful for driving LLM interactions or Tool input.": "提示词定义了来自 MCP 服务器的带参数的可重用消息模板。您还可以添加自定义提示词，用于驱动 LLM 交互或工具输入。",
        "Search prompts via tags...": "通过标签搜索提示词...",
        "Add New Prompt": "添加新提示词",
        "Prompt Name": "提示词名称",
        "Display Name": "显示名称",
        "Template": "模板",
        "Arguments (JSON)": "参数 (JSON)",
        "Add Prompt": "添加提示词",
        "Test this Prompt with sample arguments": "使用示例参数测试此提示词",
        "Prompt name is required.": "提示词名称为必填项。",
        "Gateway Name": "网关名称",
        "Loading more prompts...": "正在加载更多提示词...",
        "Technical Name": "技术名称",
        "Original Name": "原始名称",
        "Custom Name": "自定义名称",
        "Enter tags separated by commas. Tags help categorize and filter prompts.": "输入以逗号分隔的标签。标签有助于对提示词进行分类和筛选。",
        "Active": "活跃",
        "Inactive": "未激活",
        "Local": "本地",
        "Reachability": "可达性",
        "Reachable": "可达",
        "Unreachable": "不可达",
        "Endpoint": "切入点",
        "Type": "类型",
        "Source": "来源",
        "Request Type": "请求类型",
        "Integration Type": "集成类型",
        "MCP": "MCP",
        "REST": "REST",
        "Annotations": "注解",
        "● Online": "● 在线",
        "● Offline": "● 离线",
        "● Inactive": "● 未激活",
        "Online": "在线",
        "Offline": "离线",
        "Inactive": "未激活",
        "Tool is Manually Deactivated": "工具已被手动停用",
        "Gateway unreachable": "网关不可达",
        "Everything stable": "运行稳定",
        "Everything stable": "运行稳定",
        "Admins": "管理员",
        "ID": "ID",
        "None": "无",
        "N/A": "不可用",
        "Action": "操作",
        "Enrich": "富化",
        "Generate Test Cases": "生成测试用例",
        "Validate": "验证",
        "No tools found.": "未发现工具。",
        "Loading more tools...": "正在加载更多工具...",
        "Execute this Tool with sample inputs": "使用示例输入执行此工具",
        "View tool details and configuration": "查看工具详情和配置",
        "Edit tool settings and configuration": "编辑工具设置和配置",
        "Temporarily disable this tool": "暂时停用此工具",
        "Re-enable this tool": "重新启用此工具",
        "Permanently delete this tool": "永久删除此工具",

        // Prompts - View Modal Metrics
        "Total Executions:": "总执行次数：",
        "Successful Executions:": "成功执行次数：",
        "Failed Executions:": "失败执行次数：",
        "Failure Rate:": "失败率：",
        "Min Response Time:": "最小响应时间：",
        "Max Response Time:": "最大响应时间：",
        "Average Response Time:": "平均响应时间：",
        "Last Execution Time:": "最后执行时间：",
        "Metrics:": "指标：",
        "Metadata:": "元数据：",
        "Created By:": "创建者：",
        "Created At:": "创建时间：",
        "Created From IP:": "创建自 IP：",
        "Created Via:": "创建途径：",
        "Last Modified By:": "最后修改者：",
        "Last Modified At:": "最后修改时间：",
        "Modified From IP:": "修改自 IP：",
        "Modified Via:": "修改途径：",
        "Version:": "版本：",
        "Import Batch:": "导入批次：",
        "Legacy Entity": "遗留实体",
        "Pre-metadata": "元数据之前",
        "Unknown": "未知",

        // Prompts - Observability Dashboard
        "Time Range": "时间范围",
        "Last 1 Hour": "最近 1 小时",
        "Last 6 Hours": "最近 6 小时",
        "Last 24 Hours": "最近 24 小时",
        "Last 3 Days": "最近 3 天",
        "Last 7 Days": "最近 7 天",
        "Results Limit": "结果限制",
        "Top 10": "前 10",
        "Top 20": "前 20",
        "Top 50": "前 50",
        "Top 100": "前 100",
        "Apply Filters": "应用筛选",
        "Loading prompt metrics...": "正在加载提示词指标...",
        "Overall Health": "整体健康度",
        "Most Rendered": "渲染最多",
        "Slowest Prompt": "最慢提示词",
        "Most Error-Prone": "最易出错",
        "Prompt Usage Chart": "提示词使用情况图表",
        "Prompt Slowness Chart": "提示词延迟图表",
        "Prompt Error-Prone Chart": "提示词错误率图表",
        "Prompt Performance Metrics": "提示词性能指标",
        "Prompt Rendering Frequency": "提示词渲染频率",
        "Number of Renders": "渲染次数",
        "Renders:": "渲染次数：",
        "Percentage:": "百分比：",
        "Top 10 Slowest Prompts": "最慢的前 10 个提示词",
        "Top 10 Error-Prone Prompts": "最易出错的前 10 个提示词",
        "p95 Latency (ms)": "P95 延迟 (毫秒)",
        "p50 Latency (ms)": "P50 延迟 (毫秒)",
        "Latency (ms)": "延迟 (毫秒)",
        "Avg:": "平均：",
        "Max:": "最大：",
        "Error Rate (%)": "错误率 (%)",
        "Error Rate:": "错误率：",
        "Errors:": "错误数：",
        "Total:": "总计：",
        "Success:": "成功：",
        "No errors found - all prompts rendering successfully!": "未发现错误 - 所有提示词渲染成功！",
        " renders": " 次渲染",
        " ms (p95)": " 毫秒 (P95)",
        "% errors": "% 错误率",
        "🟢 Healthy": "🟢 健康",
        "🟡 Warning": "🟡 警告",
        "🔴 Critical": "🔴 严重",
        "0% errors": "0% 错误率",

        // Prompts - Table Headers
        "#": "#",
        "Prompt ID": "提示词 ID",
        "Count": "计数",
        "Avg": "平均",
        "Min": "最小",
        "p50": "P50",
        "p90": "P90",
        "p95": "P95",
        "p99": "P99",
        "Max": "最大",

        // Prompts - Chart Labels
        "Last": "最近",
        "Number of Renders": "渲染次数",
        "Prompt Rendering Frequency": "提示词渲染频率",
        "Top 10 Slowest Prompts": "最慢的前 10 个提示词",
        "Top 10 Error-Prone Prompts": "最易出错的前 10 个提示词",

        // Tools
        "MCP Tools": "MCP 工具",
        "Tools are executable functions provided by MCP servers.": "工具是 MCP 服务器提供的可执行函数。",
        "Search tools...": "搜索工具...",
        "Tool Name": "工具名称",
        "Configuration": "配置",
        "Add Tool": "添加工具",
        "Add New Tool from REST API": "从 REST API 添加新工具",
        "Display Name (optional)": "显示名称 (可选)",
        "URL is required.": "URL 为必填项。",
        "Integration Type": "集成类型",
        "Headers (JSON)": "请求头 (JSON)",
        "Input Schema (JSON)": "输入模式 (JSON)",
        "Schema Builder": "模式构建器",
        "JSON Input": "JSON 输入",
        "Add New Parameter": "添加新参数",
        "Advanced: Add Passthrough": "高级：添加透传",
        "Output Schema (JSON)": "输出模式 (JSON)",
        "Optional JSON Schema for validating structured tool output. Leave empty if not needed.": "用于验证结构化工具输出的可选 JSON 模式。如果不需要，请留空。",
        "Json Path Filter": "JSON 路径过滤器",

        // Settings / Auth
        "Username": "用户名",
        "Password": "密码",
        "API Key Value": "API 密钥值",
        "Query Parameter Name": "查询参数名称",
        "Security Warning:": "安全警告：",
        "API keys in URLs may appear in proxy logs, browser history, and server access logs.": "URL 中的 API 密钥可能会出现在代理日志、浏览器历史记录和服务器访问日志中。",
        "Show": "显示",
        "Hide": "隐藏",
        "Annotation badges": "批注徽章",
        "Read-Only": "只读",
        "Destructive": "具有破坏性",
        "Idempotent": "幂等",
        "External Access": "外部访问",
        "Public": "公开",
        "Team": "团队",
        "Private": "私有",
        "Token": "令牌",
        "Custom display name for your UI": "界面的自定义显示名称",
        "Search resources via tags...": "通过标签搜索资源...",
        "Search prompts via tags...": "通过标签搜索提示词...",
        "Search MCP servers...": "搜索 MCP 服务器...",
        "Search tools via tags...": "通过标签搜索工具...",
        "URI": "URI",
        "Template": "模板",
        "MIME Type": "MIME 类型",
        "Content": "内容",
        "Tags": "标签",
        "Visibility": "可见性",
        "Uploads or links a reusable data asset (file, URI, or text).": "上传或链接可重用的数据资产 (文件、URI 或文本)。",
        "Creates a reusable message template with parameters.": "创建带有参数的可重用消息模板。",

        // Login & Password Change Required
        "Sign In": "登录",
        "Continue with": "使用以下方式继续",
        "Or continue with email": "或者使用电子邮件继续",
        "Email address": "电子邮件地址",
        "Enter your email": "输入您的电子邮件",
        "Password": "密码",
        "Enter your password": "输入您的密码",
        "Secured by MCP Gateway Authentication": "由 MCP 网关身份验证保护",
        "MCP & AI Gateway": "MCP 和 AI 网关",
        "MCP, A2A and REST gateway with advanced security & observability": "具有高级安全性和可观测性的 MCP、A2A 和 REST 网关",
        "Core Platform": "核心平台",
        "Federation": "联邦",
        "Multi-gateway networks with auto-discovery": "具有自动发现功能的多网关网络",
        "Virtual Servers": "虚拟服务器",
        "Compose custom MCP endpoints": "组合自定义 MCP 端点",
        "Multi-Transport": "多传输协议",
        "HTTP, WebSocket, SSE protocols": "HTTP、WebSocket、SSE 协议",
        "Enterprise Ready": "企业级就绪",
        "Security": "安全",
        "JWT auth, rate limiting, PII & OPA plugins": "JWT 认证、频率限制、PII 和 OPA 插件",
        "Observability": "可观测性",
        "Metrics & comprehensive logging": "指标和全面日志记录",
        "A2A Agents": "A2A 代理",
        "AI agent integration & workflows": "AI 代理集成和工作流",
        "Production Ready": "生产级就绪",
        "High Performance": "高性能",
        "Secure by Design": "安全设计",
        "Signing in...": "正在登录...",
        "Login failed": "登录失败",
        "Please provide both email and password": "请提供电子邮件和密码",
        "Invalid email or password": "电子邮件或密码无效",
        "Admin privileges required": "需要管理员权限",
        "Server error. Please try again": "服务器错误。请重试",
        "SSO authentication failed. Please try again": "SSO 身份验证失败。请重试",
        "SSO authentication was cancelled": "SSO 身份验证已取消",
        "SSO authentication failed. Please try again or use email/password.": "SSO 身份验证失败。请重试或使用电子邮件/密码。",
        "Password Change Required": "需要更改密码",
        "Your password has expired and must be changed to continue.": "您的密码已过期，必须更改才能继续。",
        "Password policy enabled:": "已启用密码策略：",
        "An error occurred while changing your password. Please try again.": "更改密码时出错。请重试。",
        "Password changed successfully! Redirecting...": "密码更改成功！正在重定向...",
        "Current Password": "当前密码",
        "Enter your current password": "输入您的当前密码",
        "New Password": "新密码",
        "Enter your new password": "输入您的新密码",
        "Confirm New Password": "确认新密码",
        "Confirm your new password": "确认您的新密码",
        "Password strength:": "密码强度：",
        "Weak": "弱",
        "Medium": "中",
        "Strong": "强",
        "Passwords match": "密码匹配",
        "Password Requirements": "密码要求",
        "At least": "至少",
        "characters long": "个字符长",
        "Contains uppercase letters (A-Z)": "包含大写字母 (A-Z)",
        "Contains lowercase letters (a-z)": "包含小写字母 (a-z)",

        // Resources & Roots
        "Loading resources...": "正在加载资源...",
        "Name is required.": "名称为必填项。",
        "Enter tags separated by commas. Tags help categorize and filter resources.": "输入以逗号分隔的标签。标签有助于对资源进行分类和筛选。",
        "Root Directories": "根目录",
        "Roots define the base folders accessible for file-based Resources. They enable MCP servers to browse local content.": "根目录定义了基于文件的资源可访问的基础文件夹。它们使 MCP 服务器能够浏览本地内容。",
        "View root directory details and configuration": "查看根目录详情和配置",
        "Edit root directory settings and configuration": "编辑根目录设置和配置",
        "Export root directory configuration": "导出根目录配置",
        "Registers a base directory that MCP servers can browse for files.": "注册一个 MCP 服务器可以浏览文件的基础目录。",
        "Permanently delete this item – cannot be undone": "永久删除此项目 – 无法撤消",
        "Add Root": "添加根目录",
        "file:///path/to/directory": "file:///目录/路径",
        "My Project": "我的项目",

        // Generic
        "Name": "名称",
        "Description": "描述",
        "Status": "状态",
        "Actions": "操作",
        "Usage": "使用情况",
        "Registers a new Tool from an existing REST endpoint. Use Gateways to add MCP servers.": "从现有 REST 端点注册新工具。使用网关注册 MCP 服务器。",
        "Contains numbers (0-9)": "包含数字 (0-9)",
        "Contains special characters": "包含特殊字符",
        "Contains special characters (!@#$%^&*()_+[]{}:;\"'<>?,.)": "包含特殊字符 (!@#$%^&*()_+[]{}:;\"'<>?,.)",
        "Change Password": "更改密码",
        "Changing Password...": "正在更改密码...",
        "Your password will be securely encrypted and stored": "您的密码将被安全加密并存储",
        "SECURITY FEATURES": "安全特性",
        "Password Security": "密码安全",
        "Strong password policies with automatic expiration and complexity requirements": "具有自动过期和复杂度要求的强密码策略",
        "Account Protection": "账户保护",
        "Multi-factor authentication and account lockout protection": "多因素身份验证和账户锁定保护",
        "Audit & Monitoring": "审计与监控",
        "Complete audit trail of all authentication events and activities": "所有身份验证事件和活动的完整审计追踪",
        "Passwords do not match": "密码不匹配",
        "Password does not meet requirements": "密码不符合要求",
        "Current password is incorrect": "当前密码不正确",
        "New password does not meet requirements": "新密码不符合要求",
        "New password must be different from current password": "新密码必须与当前密码不同",
        "Password confirmation does not match": "密码确认不匹配",

        // Users
        "Admin": "管理员",
        "You": "您",
        "Last Admin": "最后一位管理员",
        "Force Password Change": "强制更改密码",
        "No users found.": "未发现用户。",
        "Created:": "创建时间：",
        "Provider:": "提供商：",
        "Activate this user?": "确认为此用户激活？",
        "Deactivate this user?": "确认为此用户停用？",
        "Force this user to change their password on next login?": "强制该用户在下次登录时更改密码？",
        "Are you sure you want to delete this user? This action cannot be undone.": "您确定要删除此用户吗？此操作无法撤销。",
        "Administrator privileges": "管理员权限",
        "Create User": "创建用户",
        "System Users": "系统用户",
        "Loading users...": "正在加载用户...",
        "User Management": "用户管理",
        "Manage user accounts and permissions": "管理用户账户和权限",
        "Create New User": "创建新用户",
        "Email Address *": "电子邮件地址 *",
        "user@example.com": "user@example.com",
        "Full Name *": "全名 *",
        "Password *": "密码 *",
        "Strong password": "强密码",
        "At least {{ password_min_length or 8 }} characters long": "至少 {{ password_min_length or 8 }} 个字符长",

        // Teams
        "PERSONAL": "个人",
        "OWNER": "所有者",
        "MEMBER": "成员",
        "CAN JOIN": "可以加入",
        "ACTIVE": "活跃",
        "INACTIVE": "未激活",
        "ACTIVE": "活跃",
        "INACTIVE": "未激活",
        "members": "成员",
        "Your personal team • Private workspace": "您的个人团队 • 私有工作区",
        "You own this team": "您拥有此团队",
        "You are a member • Owner:": "您是成员 • 所有者：",
        "Public team • Owner:": "公开团队 • 所有者：",
        "No description": "无描述",
        "Personal workspace - no actions available": "个人工作区 - 无可用操作",
        "Manage Members": "管理成员",
        "Edit Settings": "编辑设置",
        "Join Requests": "加入请求",
        "Delete Team": "删除团队",
        "Leave Team": "离开团队",
        "Requested to Join": "已请求加入",
        "Cancel Request": "取消请求",
        "Request to Join": "请求加入",
        "No teams found. Create your first team using the button above.": "未发现团队。使用上方按钮创建您的第一个团队。",
        "My Teams": "我的团队",
        "Teams you own, are a member of, and can join": "您拥有、加入的以及可以加入的团队",
        "Create New Team": "创建新团队",
        "Find teams...": "查找团队...",
        "All Teams": "所有团队",
        "I Own": "我拥有的",
        "I'm a Member": "我是成员",
        "Can Join": "可加入",
        "Loading teams...": "正在加载团队...",
        "Request to Join": "请求加入",
        "Cancel Request": "取消请求",
        "Leave Team": "离开团队",
        "Delete Team": "删除团队",
        "Edit Settings": "编辑设置",
        "Manage Members": "管理成员",
        "Join Requests": "加入请求",

        // Maintenance
        "Platform Maintenance": "平台维护",
        "Administrative tools for platform maintenance and data management. These operations are restricted to platform administrators.": "用于平台维护和数据管理的管理工具。这些操作仅限于平台管理员。",
        "Metrics Maintenance": "指标维护",
        "Manage metrics data retention and aggregation. Cleanup removes old raw metrics, rollup creates hourly summaries for efficient historical queries.": "管理指标数据保留和聚合。清理操作删除旧的原始指标，汇总操作创建每小时摘要以实现高效的历史查询。",
        "Metrics Cleanup": "指标清理",
        "Delete metrics older than:": "删除早于此时间的指标：",
        "days": "天",
        "Delete ALL metrics (ignores retention)": "删除所有指标 (忽略保留策略)",
        "Also delete hourly rollup data": "同时删除每小时汇总数据",
        "Run Cleanup": "运行清理",
        "Deleting...": "正在删除...",
        "Confirm Metrics Cleanup": "确认指标清理",
        "WARNING: This will permanently delete ALL metrics data!": "警告：这将永久删除所有指标数据！",
        "Hourly rollup data will also be deleted.": "每小时汇总数据也将被删除。",
        "This action cannot be undone.": "此操作无法撤销。",
        "Cancel": "取消",
        "Yes, Delete": "是的，删除",
        "Deleted:": "已删除：",
        "records": "条记录",
        "Metrics Rollup": "指标汇总",
        "Process metrics from last:": "处理最近时间的指标：",
        "Aggregates raw metrics into hourly summaries with percentiles (p50, p95, p99).": "将原始指标聚合为带有分位数 (p50, p95, p99) 的每小时摘要。",
        "1 hour": "1 小时",
        "4 hours": "4 小时",
        "12 hours": "12 小时",
        "24 hours (1 day)": "24 小时 (1 天)",
        "72 hours (3 days)": "72 小时 (3 天)",
        "168 hours (7 days)": "168 小时 (7 天)",
        "720 hours (30 days)": "720 小时 (30 天)",
        "2160 hours (90 days)": "2160 小时 (90 天)",
        "8760 hours (365 days)": "8760 小时 (365 天)",
        "Run Rollup Now": "立即运行汇总",
        "Processing...": "正在处理...",
        "Confirm Metrics Rollup": "确认指标汇总",
        "Existing rollups for those hours will be updated with current data.": "这些小时的现有汇总将使用当前数据进行更新。",
        "Yes, Run Rollup": "是的，运行汇总",
        "New:": "新增：",
        "Updated:": "更新：",
        "rollups": "个汇总",
        "Both operations run automatically in the background. Manual triggers are for immediate execution.": "这两个操作都会在后台自动运行。手动触发用于立即执行。",
        "Metrics maintenance is disabled": "指标维护已禁用",
        "To enable metrics cleanup and rollup, set METRICS_CLEANUP_ENABLED=true and/or METRICS_ROLLUP_ENABLED=true in your environment.": "要启用指标清理和汇总，请在环境中设置 METRICS_CLEANUP_ENABLED=true 和/或 METRICS_ROLLUP_ENABLED=true。",
        "System Health": "系统健康状况",
        "Database": "数据库",
        "Cache": "缓存",
        "Background Jobs": "后台作业",
        "Healthy": "健康",
        "Operational": "正常运行",
        "Running": "正在运行",

        // Maintenance - Additional translations for dynamic content
        "This will delete all metrics older than": "这将删除所有早于",
        "This will aggregate raw metrics from the last": "这将汇总最近",
        "hours into hourly summaries.": "小时的原始指标数据为每小时摘要。",
        "hours.": "小时。",
        "Existing rollups for those hours will be updated with current data.": "这些小时的现有汇总将使用当前数据进行更新。",

        // Plugins
        "Plugin Management": "插件管理",
        "Plugins are currently disabled": "插件目前已禁用",
        "Set PLUGINS_ENABLED=true in your environment to enable plugin functionality.": "在您的环境中设置 PLUGINS_ENABLED=true 以启用插件功能。",
        "Total Plugins": "总插件数",
        "Enabled": "已启用",
        "Disabled": "已禁用",
        "Enforce Mode": "强制模式",
        "Hook Points": "挂钩点",
        "All Hooks": "所有挂钩",
        "Popular Tags": "热门标签",
        "All Tags": "所有标签",
        "Authors": "作者",
        "All Authors": "所有作者",
        "Search plugins by name, description, or author...": "通过名称、描述或作者搜索插件...",
        "All Modes": "所有模式",
        "All Status": "所有状态",
        "Enforce": "强制",
        "Permissive": "宽容",
        "Priority": "优先级",
        "Pure Python implementation": "纯 Python 实现",
        "Rust-accelerated implementation (5-100x faster)": "Rust 加速实现 (快 5-100 倍)",
        "View Details →": "查看详情 →",
        "No plugins found": "未发现插件",
        "No plugins are currently loaded in the system.": "系统中目前未加载任何插件。",
        "Plugin Details": "插件详情",
        "Author": "作者",
        "more": "更多",
        "Hooks:": "挂钩：",

        // Pagination Controls
        "Show:": "显示：",
        "per page": "每页",
        "First Page": "首页",
        "Previous Page": "上一页",
        "Next Page": "下一页",
        "Last Page": "末页",
        "to navigate": "进行导航",

        // Observability Dashboard
        "Observability Dashboard": "可观测性仪表板",
        "Saved Queries": "已保存的查询",
        "Save Query": "保存查询",
        "Time Range": "时间范围",
        "All Status": "所有状态",
        "Advanced Filters": "高级筛选",
        "Refresh": "刷新",
        "Traces": "追踪",
        "Advanced Metrics": "高级指标",
        "MCP Tools": "MCP 工具",
        "Prompts": "提示词",
        "Resources": "资源",
        "Min Duration": "最小时长",
        "Max Duration": "最大时长",
        "Min Duration (ms)": "最小时长 (毫秒)",
        "Max Duration (ms)": "最大时长 (毫秒)",
        "HTTP Method": "HTTP 方法",
        "User Email": "用户邮箱",
        "Trace Name": "追踪名称",
        "Attribute Search": "属性搜索",
        "MCP Tool Name": "MCP 工具名称",
        "Clear All Filters": "清除所有筛选",
        "Loading statistics...": "正在加载统计数据...",
        "Loading traces...": "正在加载追踪数据...",
        "Timestamp": "时间戳",
        "Endpoint": "端点",
        "Current Filters": "当前筛选条件",
        "Cancel": "取消",
        "Query saved successfully!": "查询保存成功！",
        "Failed to save query": "保存查询失败",
        "Are you sure you want to delete this saved query?": "您确定要删除此已保存的查询吗？",
        "Loading metrics dashboard...": "正在加载指标仪表板...",
        "Loading tool metrics dashboard...": "正在加载工具指标仪表板...",
        "Loading resource metrics dashboard...": "正在加载资源指标仪表板...",

        // LLM Providers
        "LLM Providers": "LLM 提供者",
        "Configure external LLM providers for the internal LLM Chat feature": "为内部 LLM 聊天功能配置外部 LLM 提供者",
        "Total Providers": "总提供者数",
        "Healthy": "健康",
        "Total Models": "总模型数",
        "No providers configured": "未配置提供者",
        "Get started by adding an LLM provider": "添加 LLM 提供者以开始使用",
        "Supported Provider Types": "支持的提供者类型",
        "Check Health": "检查健康状态",
        "List Available Models": "列出现有模型",
        "Sync Models to Database": "同步模型到数据库",
        "Filter by Provider:": "按提供者筛选：",
        "All Providers": "所有提供者",

        // LLM Models
        "LLM Models": "LLM 模型",
        "Configure available models for each provider": "为每个提供者配置可用模型",
        "Streaming": "流式传输",
        "Function Calling": "函数调用",
        "No models configured": "未配置模型",
        "Add models to your configured providers": "向您配置的提供者添加模型",
        "Alias:": "别名：",
        "Deprecated": "已弃用",

        // Metrics Stats
        "Total Requests": "总请求数",
        "Success Rate": "成功率",
        "Error Count": "错误数",
        "Avg Response Time": "平均响应时间",

        // Metrics Controls
        "Last Hour": "最近 1 小时",
        "Last 6 Hours": "最近 6 小时",
        "Last 24 Hours": "最近 24 小时",
        "Last 3 Days": "最近 3 天",
        "Last 7 Days": "最近 7 天",
        "Interval": "间隔",
        "5 Minutes": "5 分钟",
        "15 Minutes": "15 分钟",
        "1 Hour": "1 小时",
        "6 Hours": "6 小时",
        "1 Day": "1 天",
        "Top N Limit": "Top N 限制",
        "Top 5": "前 5",
        "Top 10": "前 10",
        "Top 20": "前 20",
        "Top 50": "前 50",
        "Loading...": "加载中...",

        // Chart Labels
        "Latency Percentiles Over Time": "延迟百分位数随时间变化",
        "p50 (median)": "P50 (中位数)",
        "Request Rate & Error Rate": "请求速率与错误率",
        "Error Rate (%)": "错误率 (%)",
        "Requests": "请求数",
        "Latency Distribution Heatmap": "延迟分布热图",
        "Request Count": "请求数",
        "Time": "时间",
        "Latency": "延迟",
        "System Metrics": "系统指标",
        "Real-time system metrics showing counts across all entity types. Useful for capacity planning and system monitoring.": "显示所有实体类型的实时系统指标。用于容量规划和系统监控。",
        "Top Performers": "最佳表现者",
        "View the most frequently used tools, resources, prompts, and servers with paginated results.": "查看使用频率最高的工具、资源、提示词和服务器 (分页结果)。",
        "Rank": "排名",
        "Executions": "执行次数",
        "Avg Response Time": "平均响应时间",
        "Last Used": "最后使用",
        "Loading top tools...": "正在加载热门工具...",
        "Loading system metrics...": "正在加载系统指标...",
        "Total Executions": "总执行次数",
        "Error Rate": "错误率",
        "Loading top resources...": "正在加载热门资源...",
        "Loading top prompts...": "正在加载热门提示词...",
        "Loading top servers...": "正在加载热门服务器...",
        "Servers": "服务器",
        "Slowest Endpoints": "最慢端点",
        "Highest Volume": "最高流量",
        "Most Errors": "最多错误",

        // Tools Metrics
        "Results Limit": "结果限制",
        "Apply Filters": "应用筛选",
        "Overall Health": "整体健康状况",
        "Most Used Tool": "最常用工具",
        "Slowest Tool": "最慢工具",
        "Most Error-Prone": "最易出错",
        "Tool Usage Frequency": "工具使用频率",
        "Top 10 Slowest Tools": "最慢的前 10 个工具",
        "Top 10 Error-Prone Tools": "最易出错的前 10 个工具",
        "Invocation Count": "调用次数",
        "Number of Invocations": "调用次数",
        "Invocations:": "调用次数：",
        "Percentage:": "百分比：",
        "p95 Latency (ms)": "P95 延迟 (毫秒)",
        "p50 Latency (ms)": "P50 延迟 (毫秒)",
        "Avg:": "平均：",
        "Max:": "最大：",
        "Tool Performance Metrics": "工具性能指标",
        "Tool Error Rates": "工具错误率",
        "Common Tool Chains": "常用工具链",
        "Tools frequently invoked together in the same trace": "在同一追踪中频繁一起调用的工具",
        "Tool Chain": "工具链",
        "Frequency": "频率",
        "Tool Name": "工具名称",
        "Total Count": "总计数",
        "invocations": "次调用",
        "ms (p95)": "毫秒 (P95)",
        "% errors": "% 错误率",
        "✓ No errors found - all tools operating normally!": "✓ 未发现错误 - 所有工具正常运行！",

        // Resources Metrics
        "Loading resource metrics...": "正在加载资源指标...",
        "Most Fetched": "最多获取",
        "Slowest Resource": "最慢资源",
        "Resource Fetch Frequency": "资源获取频率",
        "Top 10 Slowest Resources": "最慢的前 10 个资源",
        "Top 10 Error-Prone Resources": "最易出错的前 10 个资源",
        "Fetch Count": "获取次数",
        "Number of Fetches": "获取次数",
        "Fetches:": "获取次数：",
        "Resource Performance Metrics": "资源性能指标",
        "Resource URI": "资源 URI",
        "Resource Error Rates": "资源错误率",
        "fetches": "次获取",
        "✓ No errors found - all resources fetched successfully!": "✓ 未发现错误 - 所有资源获取成功！",

        // Gateway Items
        "Never": "从未",

        // Common
        "ms": "毫秒",
        "of": "页，共",

        // Additional translations for completeness
        "Query Name": "查询名称",
        "Success Only": "仅成功",
        "Errors Only": "仅错误",
        "Query": "查询",
        "All Methods": "所有方法",
        "e.g., 100": "例如：100",
        "e.g., 5000": "例如：5000",
        "admin@example.com": "admin@example.com",
        "e.g., GET /api/tools": "例如：GET /api/tools",
        "Search in attributes...": "在属性中搜索...",
        "Filter by tool name...": "按工具名称筛选...",
        "e.g., Slow Requests Last Hour": "例如：最近一小时的慢请求",
        "What does this query help you find?": "此查询帮助您查找什么？",
        "Share with team (visible to all users)": "与团队共享 (所有用户可见)",
        "Time:": "时间：",
        "Status:": "状态：",
        "Min Duration:": "最小时长：",
        "Max Duration:": "最大时长：",
        "User:": "用户：",
        "Name:": "名称：",
        "Attributes:": "属性：",
        "Tool:": "工具：",

        // Additional translations
        "Type": "类型",
        "API Base": "API 基准",
        "Health": "健康状况",
        "Models": "模型",
        "Method": "方法",
        "Description (optional)": "描述 (可选)",
        "Share with team (visible to all users)": "与团队共享 (所有用户可见)",
        "Source": "来源",
        "● Active": "● 活跃",
        "● Inactive": "● 未激活",
        "🌍 Public": "🌍 公开",
        "👥 Team": "👥 团队",
        "🔒 Private": "🔒 私有",
        "Last": "最近",
        "Interval": "间隔",
        "5 Minutes": "5 分钟",
        "15 Minutes": "15 分钟",
        "1 Hour": "1 小时",
        "6 Hours": "6 小时",
        "1 Day": "1 天",
        "Top 5": "前 5",
        "Top 20": "前 20",
        "Top 50": "前 50",
        "3 Days": "3 天",
        "Alias:": "别名：",
        "Deprecated": "已弃用",
        "No models configured": "未配置模型",
        "Add models to your configured providers": "向您配置的提供者添加模型",
        "Configure available models for each provider": "为每个提供者配置可用模型",
        "p90": "P90",
        "p99": "P99",

        // Selector items loading messages
        "Loading more agents...": "正在加载更多代理...",
        "Loading more gateways...": "正在加载更多网关...",
        "Loading more resources...": "正在加载更多资源...",
        "Loading more servers...": "正在加载更多服务器...",
        "Loading more teams...": "正在加载更多团队...",
        "Loading more prompts...": "正在加载更多提示词...",
        "Loading more tools...": "正在加载更多工具...",
        "No teams found": "未发现团队",
        "members": "名成员",

        // A2A Agents
        "A2A Agents Catalog": "A2A 代理目录",
        "Manage Agent-to-Agent compatible agents that can be integrated as tools": "管理可作为工具集成的 Agent-to-Agent 兼容代理",
        "Search agents via tags...": "通过标签搜索代理...",
        "Registered A2A Agents": "已注册的 A2A 代理",
        "Loading agents...": "正在加载代理...",
        "No A2A agents registered yet.": "尚未注册任何 A2A 代理。",
        "Add New A2A Agent": "添加新的 A2A 代理",
        "Agent Name": "代理名称",
        "Agent Name is required.": "代理名称为必填项。",
        "my-assistant-agent": "my-assistant-agent",
        "Endpoint URL": "端点 URL",
        "Endpoint URL is required.": "端点 URL 为必填项。",
        "https://api.example.com/agent": "https://api.example.com/agent",
        "Agent Type": "代理类型",
        "Generic": "通用",
        "OpenAI": "OpenAI",
        "Anthropic": "Anthropic",
        "Custom": "自定义",
        "Authentication Type": "认证类型",
        "Description of the agent's capabilities": "代理功能描述",
        "ai,assistant,production (comma-separated)": "ai,assistant,production (逗号分隔)",
        "List of headers to pass through from client requests (comma-separated, e.g., \"Authorization, X-Tenant-Id, X-Trace-Id\"). Leave empty to use global defaults.": "从客户端请求透传的请求头列表 (逗号分隔，例如 \"Authorization, X-Tenant-Id, X-Trace-Id\")。留空则使用全局默认设置。",
        "Authorization, X-Tenant-Id, X-Trace-Id": "Authorization, X-Tenant-Id, X-Trace-Id",
        "Add A2A Agent": "添加 A2A 代理",
        "Test A2A Agent": "测试 A2A 代理",
        "💡Test this agent with sample arguments": "💡使用示例参数测试此代理",
        "💡View agent details": "💡查看代理详情",
        "💡Edit agent configuration": "💡编辑代理配置",
        "💡Temporarily disable this A2A agent": "💡暂时禁用此 A2A 代理",
        "💡Re-enable this A2A agent": "💡重新启用此 A2A 代理",
        "💡Permanently delete this A2A agent": "💡永久删除此 A2A 代理",
        "💡Execute this A2A Agent test": "💡执行此 A2A 代理测试",
        "Edit A2A Agent": "编辑 A2A 代理",
        "Save Changes": "保存更改",
        "Cancel": "取消",
        "Query": "查询",
        "Enter the message/query to send to the A2A agent": "输入发送给 A2A 代理的消息/查询",
        "Hello from MCP Gateway Admin UI test!": "Hello from MCP Gateway Admin UI test!",
        "Test Agent": "测试代理",
        "Testing agent, please wait": "正在测试代理，请稍候",
        "Response": "响应",
        "Grant Type": "授权类型",
        "Authorization Code (User Delegation)": "授权码 (用户委托)",
        "Client Credentials (Machine-to-Machine)": "客户端凭据 (机器对机器)",
        "Resource Owner Password Credentials (Keycloak/Legacy)": "资源所有者密码凭据 (Keycloak/传统)",
        "Issuer URL": "颁发者 URL",
        "http://localhost:3003 or https://oauth.example.com": "http://localhost:3003 或 https://oauth.example.com",
        "The OAuth Authorization Server issuer URL. Required for DCR (Dynamic Client Registration).": "OAuth 授权服务器颁发者 URL。DCR (动态客户端注册) 必需。",
        "Client ID": "客户端 ID",
        "Leave empty for auto-registration via DCR": "留空以通过 DCR 自动注册",
        "Client Secret": "客户端密钥",
        "Username": "用户名",
        "Password": "密码",
        "for password grant": "用于密码授权",
        "Token URL": "令牌 URL",
        "https://oauth.example.com/token": "https://oauth.example.com/token",
        "Authorization URL": "授权 URL",
        "https://oauth.example.com/authorize": "https://oauth.example.com/authorize",
        "The OAuth provider's authorization endpoint URL": "OAuth 提供商的授权端点 URL",
        "Redirect URI": "重定向 URI",
        "https://a2aagent.example.com/oauth/callback": "https://a2aagent.example.com/oauth/callback",
        "This must match the redirect URI configured in your OAuth application": "这必须与您的 OAuth 应用程序中配置的重定向 URI 匹配",
        "Scopes": "作用域",
        "repo read:user (space-separated)": "repo read:user (空格分隔)",
        "Space-separated list of OAuth scopes (e.g., \"repo read:user\")": "空格分隔的 OAuth 作用域列表 (例如 \"repo read:user\")",
        "Authorization Code Flow Setup": "授权码流程设置",
        "After creating this gateway, you'll need to:": "创建此网关后，您需要：",
        "Click the \"🔐 Authorize\" button in the gateway list": "点击网关列表中的 \"🔐 Authorize\" 按钮",
        "Complete the OAuth consent flow with your provider": "完成与提供商的 OAuth 同意流程",
        "Return to the admin panel to see authorization status": "返回管理面板查看授权状态",
        "Note: The Agent will be created but tools won't work until OAuth authorization is completed.": "注意：代理将被创建，但在完成 OAuth 授权之前工具无法工作。",
        "Token Management": "令牌管理",
        "Store access tokens for reuse": "存储访问令牌以供重用",
        "Automatically refresh expired tokens": "自动刷新过期令牌",
        "Token management options for Authorization Code flow": "授权码流程的令牌管理选项",

        // OAuth and Server Configuration
        "Authorization Server URL": "授权服务器 URL",
        "The OAuth 2.0 authorization server URL (e.g., your Identity Provider)": "OAuth 2.0 授权服务器 URL（例如您的身份提供商）",
        "Scopes (space-separated)": "作用域（空格分隔）",
        "OAuth scopes to request (e.g., openid profile email)": "要请求的 OAuth 作用域（例如 openid profile email）",
        "Token Endpoint URL (optional)": "令牌端点 URL（可选）",
        "Leave blank to use standard discovery from authorization server": "留空以使用授权服务器的标准发现",
        "Add Server": "添加服务器",

        // Tools and Bulk Import
        "Add New Tool from REST API": "从 REST API 添加新工具",
        "Convert existing REST API to an MCP Tool": "将现有 REST API 转换为 MCP 工具",
        "Bulk Import": "批量导入",
        "📥 Bulk Import Information": "📥 批量导入信息",
        "Import multiple tools from a JSON array. The system automatically fixes common formatting issues like tool name spaces and tag formats.": "从 JSON 数组导入多个工具。系统会自动修复常见的格式问题，例如工具名称空格和标签格式。",
        "Maximum:": "最大：",
        "Sample JSON Template:": "示例 JSON 模板：",
        "📥 Download Sample": "📥 下载示例",
        "Tool Details": "工具详情",
        "Close": "关闭",
        "Bulk Import Tools": "批量导入工具",
        "Paste a JSON array or upload a .json file. Max {max} tools.": "粘贴 JSON 数组或上传 .json 文件。最多 {max} 个工具。",
        "JSON Data": "JSON 数据",
        "Or upload JSON file": "或上传 JSON 文件",
        "Import Tools": "导入工具",
        "Processing...": "处理中...",
        "📊 Import Summary": "📊 导入摘要",
        "Total Tools": "总工具数",
        "Successful": "成功",
        "Failed": "失败",

        // Modal titles and form elements
        "Gateway Details": "网关详情",
        "Edit Gateway": "编辑网关",
        "Server Details": "服务器详情",
        "Edit Server": "编辑服务器",
        "Name is required.": "名称为必填项。",
        "URL is required.": "URL 为必填项。",

        // Common buttons and labels
        "Save Provider": "保存提供者",
        "Save Model": "保存模型",
        "Save Changes": "保存更改",
        "Confirm": "确认",
        "API Key Required": "需要 API 密钥",
        "Required Fields:": "必填字段：",
        "Optional Fields:": "可选字段：",
        "Optional": "可选",
        "Required": "必填",
        "Add LLM Model": "添加 LLM 模型",
        "Edit LLM Model": "编辑 LLM 模型",
        "View Descriptions": "查看描述",
        "Original Description": "原始描述",
        "Enriched Description": "丰富描述",
        "Passthrough Headers (Optional)": "透传请求头（可选）",
        "Token Scoping (Optional)": "令牌作用域（可选）",
        "API Token Management": "API 令牌管理",
        "Create and manage personal API tokens with scoped access controls": "创建和管理具有范围访问控制的个人 API 令牌",
        "Create New API Token": "创建新 API 令牌",
        "Token Name *": "令牌名称 *",
        "Production API Access": "生产环境 API 访问",
        "Token Name is required.": "令牌名称为必填项。",
        "Expires In (Days)": "过期时间 (天)",
        "Token Scope": "令牌作用域",
        "public resources only": "仅公共资源",
        "✅ This token CAN access:": "✅ 此令牌可以访问：",
        "Public servers (virtual servers marked as public)": "公共服务器 (标记为公共的虚拟服务器)",
        "Public tools, resources, and prompts": "公共工具、资源和提示词",
        "❌ This token CANNOT access:": "❌ 此令牌无法访问：",
        "Your own private or team-scoped resources": "您自己的私有或团队范围的资源",
        "Team-scoped servers, tools, resources, and prompts": "团队范围的服务器、工具、资源和提示词",
        "For team-level access, select a specific team from the header above before creating a token.": "如需团队级访问权限，请在创建令牌之前从上方的标题中选择特定团队。",
        "Team-level scoping enabled.": "已启用团队级作用域。",
        "This token will be scoped to:": "此令牌的作用域将限定为：",
        "Token can access all resources (public, team, and private) within this team.": "令牌可以访问此团队中的所有资源（公共、团队和私有）。",
        "Server ID (Limit to specific server)": "服务器 ID (限制为特定服务器)",
        "server-abc-123": "server-abc-123",
        "IP Restrictions (CIDR format)": "IP 限制 (CIDR 格式)",
        "192.168.1.0/24": "192.168.1.0/24",
        "Permissions (comma-separated)": "权限 (逗号分隔)",
        "tools.read, resources.read, tools.execute": "tools.read, resources.read, tools.execute",
        "Create Token": "创建令牌",
        "Your API Tokens": "您的 API 令牌",
        "Loading tokens...": "正在加载令牌...",
    },
    "en": {
        // Fallback or explicit EN strings
    }
};

class I18n {
    constructor() {
        this.lang = localStorage.getItem('mcp_lang') || 'en';
        this.translations = translations;
        this.observers = [];
    }

    setLanguage(lang) {
        this.lang = lang;
        localStorage.setItem('mcp_lang', lang);
        this.updatePage();
    }

    addTranslations(lang, newTranslations) {
        if (!this.translations[lang]) {
            this.translations[lang] = {};
        }
        Object.assign(this.translations[lang], newTranslations);
    }

    t(key) {
        if (this.lang === 'en') return key;
        return (this.translations[this.lang] && this.translations[this.lang][key]) || key;
    }

    updatePage() {
        // Update document title
        if (this.lang === 'zh') {
            document.title = "ContextForge - 网关管理";
        } else {
            document.title = "ContextForge - Gateway Administration";
        }

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder') !== null) {
                    el.placeholder = this.t(key);
                } else if (el.tagName === 'SELECT') {
                    // For select elements, update their options if they have data-i18n
                    Array.from(el.options).forEach(opt => {
                        const optKey = opt.getAttribute('data-i18n');
                        if (optKey) {
                            opt.textContent = this.t(optKey);
                        } else {
                            // If option doesn't have data-i18n, maybe it's the text itself?
                            // But better to be explicit with data-i18n on options.
                        }
                    });
                } else {
                    el.textContent = this.t(key);
                }
            }
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key) {
                el.placeholder = this.t(key);
            }
        });

        // Update elements with data-i18n-aria-label attribute
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (key) {
                el.setAttribute('aria-label', this.t(key));
            }
        });

        // Update tooltips if they use data-i18n-tooltip
        document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
            const key = el.getAttribute('data-i18n-tooltip');
            if (key) {
                const translated = this.t(key);
                // Handle different tooltip systems (Alpine.js x-tooltip or native title)
                if (el.hasAttribute('x-tooltip')) {
                    el.setAttribute('x-tooltip', `'💡${translated}'`);
                } else {
                    el.title = translated;
                }
            }
        });

        // Notify other components if needed (e.g. re-render charts/tables)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: this.lang }));
    }
}

window.i18n = new I18n();

// Debug log to check current language
console.log('[i18n] Initializing i18n, language:', window.i18n.lang, 'from localStorage:', localStorage.getItem('mcp_lang'));

// Global flags
let htmxListenersSetup = false;
let mutationObserverSetup = false;

// Set up MutationObserver to watch for new data-i18n elements
function setupMutationObserver() {
    if (mutationObserverSetup || !document.body) return;

    mutationObserverSetup = true;
    console.log('[i18n] Setting up MutationObserver');

    const observer = new MutationObserver((mutations) => {
        // Check if any data-i18n elements were added
        const hasNewI18nElements = mutations.some(mutation =>
            Array.from(mutation.addedNodes).some(node =>
                node.nodeType === 1 && (
                    node.hasAttribute && node.hasAttribute('data-i18n') ||
                    node.querySelectorAll && node.querySelectorAll('[data-i18n]').length > 0
                )
            )
        );

        if (hasNewI18nElements) {
            console.log('[i18n] New data-i18n elements detected, updating page');
            requestAnimationFrame(() => {
                window.i18n.updatePage();
            });
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Set up HTMX event listeners
function setupHtmxListeners() {
    if (htmxListenersSetup) return;
    if (!document.body) {
        setTimeout(setupHtmxListeners, 10);
        return;
    }

    htmxListenersSetup = true;
    console.log('[i18n] HTMX listeners set up, language:', window.i18n.lang);

    document.body.addEventListener('htmx:afterSwap', function (evt) {
        console.log('[i18n] htmx:afterSwap triggered, language:', window.i18n.lang);
        requestAnimationFrame(() => {
            window.i18n.updatePage();
        });
    });

    document.body.addEventListener('htmx:historyRestore', function (evt) {
        console.log('[i18n] htmx:historyRestore triggered, language:', window.i18n.lang);
        requestAnimationFrame(() => {
            window.i18n.updatePage();
        });
    });
}

// Try to set up listeners immediately
setupHtmxListeners();

// Update page content
function updatePageContent() {
    console.log('[i18n] updatePageContent called, language:', window.i18n.lang);
    if (document.body) {
        requestAnimationFrame(() => {
            console.log('[i18n] Calling updatePage, found', document.querySelectorAll('[data-i18n]').length, 'data-i18n elements');
            window.i18n.updatePage();
        });
    } else {
        setTimeout(updatePageContent, 10);
    }
}

// Handle different document ready states
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('[i18n] DOMContentLoaded, language:', window.i18n.lang);
        setupHtmxListeners();
        setupMutationObserver();
        updatePageContent();
        setTimeout(updatePageContent, 100);
        setTimeout(updatePageContent, 300);
    });
} else {
    console.log('[i18n] Document readyState:', document.readyState, 'language:', window.i18n.lang);
    setupHtmxListeners();
    setupMutationObserver();
    updatePageContent();
    setTimeout(updatePageContent, 100);
    setTimeout(updatePageContent, 300);
    setTimeout(updatePageContent, 500);
}

// Helper for global usage
function t(key) {
    return window.i18n.t(key);
}
