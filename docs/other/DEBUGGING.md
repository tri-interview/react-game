# VSCode Debugging Guide

This project includes VSCode debugging configurations for debugging the Next.js application.

## Available Debug Configurations

### 1. Next.js: debug server-side
Launches the development server and allows debugging of server-side code (API routes, server components).

**How to use:**
1. Set breakpoints in your API routes (e.g., `src/app/api/*/route.ts`)
2. Press F5 or select this configuration and click "Start Debugging"
3. The server will start with debugging enabled

### 2. Next.js: debug client-side
Launches Chrome and attaches the debugger to debug React components and client-side code.

**How to use:**
1. Make sure the dev server is running (`npm run dev`)
2. Set breakpoints in your React components
3. Select this configuration and start debugging
4. Chrome will open with debugging attached

### 3. Next.js: debug full stack
Starts the dev server and automatically opens Chrome when ready, allowing you to debug both server and client code.

### 4. Debug API Route
Attaches to an already running Node.js process on port 9229.

**How to use:**
1. Run `npm run dev:debug` in terminal
2. Select this configuration and attach debugger
3. Set breakpoints in API routes

## Compound Configuration

### Debug Full Stack
Runs both server-side and client-side debugging configurations simultaneously.

## Setting Breakpoints

### Client-Side (React Components)
- Click in the gutter next to line numbers in `.tsx` files
- Use `debugger;` statement in your code
- Breakpoints work in:
  - Component functions
  - useEffect hooks
  - Event handlers
  - Custom hooks

### Server-Side (API Routes)
- Set breakpoints in `route.ts` files
- Breakpoints work in:
  - GET/POST/PUT/DELETE handlers
  - Database queries
  - Middleware functions

## Common Debugging Scenarios

### 1. Debug Login Flow
```typescript
// In src/app/api/login/route.ts
export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  
  // Set breakpoint here to inspect credentials
  console.log('Login attempt:', username);
  
  // Debug database query
  const user = await getQuery(...);
}
```

### 2. Debug React State
```typescript
// In any React component
const [state, setState] = useState();

useEffect(() => {
  // Set breakpoint here to debug state changes
  console.log('State changed:', state);
}, [state]);
```

### 3. Debug Game Logic
```typescript
// In src/app/game/page.tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Set breakpoint to inspect answer validation
  const isCorrect = userAnswerNum === currentQuestion.answer;
};
```

## Tips

1. **Source Maps**: Enabled by default for better debugging experience
2. **Hot Reload**: Debugging sessions persist through hot reloads
3. **Console**: Use the Debug Console in VSCode to evaluate expressions
4. **Watch**: Add variables to the Watch panel to monitor their values
5. **Call Stack**: Use the Call Stack panel to understand execution flow

## Troubleshooting

- If breakpoints are not hitting, ensure source maps are enabled
- For API route debugging, make sure you're using the debug script
- Clear `.next` folder if you experience source map issues
- Check that Chrome DevTools are not already attached