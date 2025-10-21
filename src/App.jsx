import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interactive React Site
          </h1>
          <p className="text-xl text-muted-foreground">
            Built with React.js and shadcn/ui components
          </p>
        </div>

        {/* Counter Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Interactive Counter</CardTitle>
            <CardDescription>
              Click the button to increment the counter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCount(count - 1)}
              >
                Decrease
              </Button>
              <div className="text-4xl font-bold text-primary w-24 text-center">
                {count}
              </div>
              <Button
                size="lg"
                onClick={() => setCount(count + 1)}
              >
                Increase
              </Button>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              variant="secondary"
              onClick={() => setCount(0)}
            >
              Reset Counter
            </Button>
          </CardFooter>
        </Card>

        {/* Form Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Fill out the form below to see interactive input components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Form
              </Button>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  ✓ Form submitted successfully!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Button Variants Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Explore different button styles from shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">React.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A JavaScript library for building user interfaces with component-based architecture.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Tailwind CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A utility-first CSS framework for rapidly building custom designs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
