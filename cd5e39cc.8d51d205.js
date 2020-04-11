(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(1),o=(n(0),n(212));const i={title:"Printer"},a={id:"api/printer",title:"Printer",description:"The [LuaPrinter](https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/src/LuaPrinter.ts) class takes Lua AST and prints it to a string (with source map). The printer implements the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern). All methods visit nodes in the AST to print them to a [`SourceNode`](https://github.com/mozilla/source-map#sourcenode), this will automatically produce correct mappings in the resulting source map.",source:"@site/docs/api/printer.md",permalink:"/docs/api/printer",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/api/printer.md",sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/api/plugins"}},p=[{value:"API Reference",id:"api-reference",children:[]}],u={rightToc:p};function c({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/src/LuaPrinter.ts"}),"LuaPrinter")," class takes Lua AST and prints it to a string (with source map). The printer implements the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Visitor_pattern"}),"visitor pattern"),". All methods visit nodes in the AST to print them to a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mozilla/source-map#sourcenode"}),Object(o.b)("inlineCode",{parentName:"a"},"SourceNode")),", this will automatically produce correct mappings in the resulting source map."),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface PrintResult {\n  code: string;\n  sourceMap: string;\n  sourceMapNode: SourceNode;\n}\n\nclass LuaPrinter {\n  constructor(options: CompilerOptions, emitHost: EmitHost, fileName: string);\n  public print(block: lua.Block, luaLibFeatures: Set<LuaLibFeature>): PrintResult;\n  public printStatement(statement: lua.Statement): SourceNode;\n  public printDoStatement(statement: lua.DoStatement): SourceNode;\n  public printVariableDeclarationStatement(statement: lua.VariableDeclarationStatement): SourceNode;\n  public printVariableAssignmentStatement(statement: lua.AssignmentStatement): SourceNode;\n  public printIfStatement(statement: lua.IfStatement, isElseIf?: boolean): SourceNode;\n  public printWhileStatement(statement: lua.WhileStatement): SourceNode;\n  public printRepeatStatement(statement: lua.RepeatStatement): SourceNode;\n  public printForStatement(statement: lua.ForStatement): SourceNode;\n  public printForInStatement(statement: lua.ForInStatement): SourceNode;\n  public printGotoStatement(statement: lua.GotoStatement): SourceNode;\n  public printLabelStatement(statement: lua.LabelStatement): SourceNode;\n  public printReturnStatement(statement: lua.ReturnStatement): SourceNode;\n  public printBreakStatement(statement: lua.BreakStatement): SourceNode;\n  public printExpressionStatement(statement: lua.ExpressionStatement): SourceNode;\n  public printExpression(expression: lua.Expression): SourceNode;\n  public printStringLiteral(expression: lua.StringLiteral): SourceNode;\n  public printNumericLiteral(expression: lua.NumericLiteral): SourceNode;\n  public printNilLiteral(expression: lua.NilLiteral): SourceNode;\n  public printDotsLiteral(expression: lua.DotsLiteral): SourceNode;\n  public printBooleanLiteral(expression: lua.BooleanLiteral): SourceNode;\n  public printFunctionExpression(expression: lua.FunctionExpression): SourceNode;\n  public printFunctionDefinition(statement: lua.FunctionDefinition): SourceNode;\n  public printTableFieldExpression(expression: lua.TableFieldExpression): SourceNode;\n  public printTableExpression(expression: lua.TableExpression): SourceNode;\n  public printUnaryExpression(expression: lua.UnaryExpression): SourceNode;\n  public printBinaryExpression(expression: lua.BinaryExpression): SourceNode;\n  public printCallExpression(expression: lua.CallExpression): SourceNode;\n  public printMethodCallExpression(expression: lua.MethodCallExpression): SourceNode;\n  public printIdentifier(expression: lua.Identifier): SourceNode;\n  public printTableIndexExpression(expression: lua.TableIndexExpression): SourceNode;\n  public printOperator(kind: lua.Operator): SourceNode;\n  protected pushIndent(): void;\n  protected popIndent(): void;\n  protected indent(input?: SourceChunk): SourceChunk;\n  protected createSourceNode(node: lua.Node, chunks: SourceChunk | SourceChunk[], name?: string): SourceNode;\n  protected concatNodes(...chunks: SourceChunk[]): SourceNode;\n  protected printBlock(block: lua.Block): SourceNode;\n  protected printStatementArray(statements: lua.Statement[]): SourceChunk[];\n  protected isStatementEmpty(statement: lua.Statement): boolean;\n  protected joinChunks(separator: string, chunks: SourceChunk[]): SourceChunk[];\n  protected printExpressionList(expressions: lua.Expression[]): SourceChunk[];\n}\n")))}c.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},l=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(b,p({ref:t},c,{components:n})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);