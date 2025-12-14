# Exam App - Next.js Full-Stack Application

A comprehensive exam management system built with Next.js 14, featuring authentication, exam creation, and result tracking.

## 🚀 Features

- **Authentication System** - Secure login/register with NextAuth.js
- **Exam Management** - Create, take, and manage exams
- **Real-time Results** - Interactive charts and analytics
- **Account Management** - Profile settings and password management
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 🏗️ Architecture

### Server Components (Default)
All route pages are **Server Components** by default, providing:
- **SEO Optimization** - Server-side rendering for better search engine visibility
- **Performance** - Faster initial page loads
- **Security** - Sensitive operations handled on the server

### Client Components
Interactive components marked with `'use client'`:
- **Forms** - User input handling and validation
- **Interactive UI** - Modals, dropdowns, and dynamic content
- **State Management** - React hooks and context providers

## 🔐 Authentication

**NextAuth.js** implementation with:
- **Credentials Provider** - Email/password authentication
- **JWT Strategy** - Secure token-based sessions
- **Middleware Protection** - Route-level authentication
- **Session Management** - Automatic token refresh

```typescript
// Authentication configuration
export const authoption: NextAuthOptions = {
  providers: [Credentials({...})],
  callbacks: { jwt, session },
  pages: { signIn: '/login', signOut: '/login' }
}
```

## 🛠️ Data Handling

### Server Actions
Server-side form handling and data mutations:

```typescript
'use server'
export async function EditAccount(data: AccountFormFields) {
  const token = await getToken();
  // Secure server-side API calls
}
```

### Route Handlers
API endpoints for external integrations:

```typescript
// app/api/auth/[...nextauth]/route.ts
const handler = NextAuth(authoption);
export { handler as GET, handler as POST };
```

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/            # Protected dashboard routes
│   │   ├── (diploma)/          # Exam management
│   │   └── accout/             # Account settings
│   ├── api/                    # Route handlers
│   └── globals.css
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── features/               # Feature-specific components
│   ├── layout/                 # Layout components
│   └── providers/              # Context providers
├── lib/
│   ├── actions/                # Server actions
│   ├── services/               # API services
│   ├── schemas/                # Zod validation schemas
│   └── utils/                  # Utility functions
└── middleware.ts               # Route protection
```

## 🎯 Component Strategy

### Server Components (Pages)
- **Data Fetching** - Direct database/API calls
- **SEO Benefits** - Meta tags and structured data
- **Security** - Sensitive operations on server

### Client Components (Interactive)
- **User Interactions** - Forms, buttons, modals
- **State Management** - React hooks and context
- **Real-time Updates** - Dynamic content updates

## 🔧 Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Context + TanStack Query
- **TypeScript**: Full type safety

## 🚦 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd exam-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

Required environment variables:
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
API=your-backend-api-url
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - sm, md, lg, xl responsive design
- **Flexible Layouts** - CSS Grid and Flexbox
- **Touch Friendly** - Optimized for touch interactions

## 🔒 Security Features

- **Route Protection** - Middleware-based authentication
- **CSRF Protection** - Built-in NextAuth.js security
- **Input Validation** - Zod schema validation
- **Secure Headers** - Next.js security headers

## 📊 Performance

- **Server-Side Rendering** - Fast initial page loads
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Caching Strategy** - Server and client-side caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
