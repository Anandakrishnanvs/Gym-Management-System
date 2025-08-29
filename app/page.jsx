"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Users, UserCheck, Crown } from "lucide-react"
import { useState } from "react"

export default function GymHomepage() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gym-hero.png')",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* Foreground content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="p-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-2">
                <Dumbbell className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-white">GymPro</h1>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">
                  About
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">
                  Services
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {/* Hero main content */}
          <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Welcome Section */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-balance">
                  Welcome to Your
                  <span className="text-primary block">Fitness Journey</span>
                </h2>
              </div>

              {/* Login/Signup Section */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <Card className="bg-gray-900/95 backdrop-blur-sm border-gray-700">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-white">
                      {isSignup ? "Join GymPro" : "Login to GymPro"}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {isSignup ? "Create your account and choose your role" : "Choose your role to access the system"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="customer" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-800">
                        <TabsTrigger value="customer" className="text-xs text-gray-200 data-[state=active]:text-white">
                          <Users className="h-4 w-4 mr-1" />
                          Customer
                        </TabsTrigger>
                        <TabsTrigger value="trainer" className="text-xs text-gray-200 data-[state=active]:text-white">
                          <UserCheck className="h-4 w-4 mr-1" />
                          Trainer
                        </TabsTrigger>
                        <TabsTrigger value="owner" className="text-xs text-gray-200 data-[state=active]:text-white">
                          <Crown className="h-4 w-4 mr-1" />
                          Owner
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="customer" className="space-y-4">
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="customer-name" className="text-gray-200">
                              Full Name
                            </Label>
                            <Input
                              id="customer-name"
                              type="text"
                              placeholder="John Doe"
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                            />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="customer-email" className="text-gray-200">
                            Email
                          </Label>
                          <Input
                            id="customer-email"
                            type="email"
                            placeholder="customer@example.com"
                            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="customer-password" className="text-gray-200">
                            Password
                          </Label>
                          <Input
                            id="customer-password"
                            type="password"
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="customer-confirm-password" className="text-gray-200">
                              Confirm Password
                            </Label>
                            <Input
                              id="customer-confirm-password"
                              type="password"
                              className="bg-gray-800 border-gray-600 text-white"
                            />
                          </div>
                        )}
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          {isSignup ? "Sign Up as Customer" : "Login as Customer"}
                        </Button>
                      </TabsContent>

                      <TabsContent value="trainer" className="space-y-4">
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="trainer-name" className="text-gray-200">
                              Full Name
                            </Label>
                            <Input
                              id="trainer-name"
                              type="text"
                              placeholder="Jane Smith"
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                            />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="trainer-email" className="text-gray-200">
                            Email
                          </Label>
                          <Input
                            id="trainer-email"
                            type="email"
                            placeholder="trainer@example.com"
                            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="trainer-password" className="text-gray-200">
                            Password
                          </Label>
                          <Input
                            id="trainer-password"
                            type="password"
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="trainer-confirm-password" className="text-gray-200">
                              Confirm Password
                            </Label>
                            <Input
                              id="trainer-confirm-password"
                              type="password"
                              className="bg-gray-800 border-gray-600 text-white"
                            />
                          </div>
                        )}
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          {isSignup ? "Sign Up as Trainer" : "Login as Trainer"}
                        </Button>
                      </TabsContent>

                      <TabsContent value="owner" className="space-y-4">
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="owner-name" className="text-gray-200">
                              Full Name
                            </Label>
                            <Input
                              id="owner-name"
                              type="text"
                              placeholder="Alex Johnson"
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                            />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor="owner-email" className="text-gray-200">
                            Email
                          </Label>
                          <Input
                            id="owner-email"
                            type="email"
                            placeholder="owner@example.com"
                            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="owner-password" className="text-gray-200">
                            Password
                          </Label>
                          <Input
                            id="owner-password"
                            type="password"
                            className="bg-gray-800 border-gray-600 text-white"
                          />
                        </div>
                        {isSignup && (
                          <div className="space-y-2">
                            <Label htmlFor="owner-confirm-password" className="text-gray-200">
                              Confirm Password
                            </Label>
                            <Input
                              id="owner-confirm-password"
                              type="password"
                              className="bg-gray-800 border-gray-600 text-white"
                            />
                          </div>
                        )}
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          {isSignup ? "Sign Up as Owner" : "Login as Owner"}
                        </Button>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 text-center space-y-2">
                      <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors block">
                        Forgot your password?
                      </a>
                      <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Information Cards */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Choose Your Role</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Customer Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-white">Customer</CardTitle>
                <CardDescription className="text-gray-300">Access your fitness journey</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-300">• View workout plans</p>
                <p className="text-sm text-gray-300">• Track progress</p>
                <p className="text-sm text-gray-300">• Book sessions</p>
                <p className="text-sm text-gray-300">• Manage membership</p>
              </CardContent>
            </Card>

            {/* Trainer Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-white">Trainer</CardTitle>
                <CardDescription className="text-gray-300">Manage your clients</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-300">• Create workout plans</p>
                <p className="text-sm text-gray-300">• Track client progress</p>
                <p className="text-sm text-gray-300">• Schedule sessions</p>
                <p className="text-sm text-gray-300">• Manage appointments</p>
              </CardContent>
            </Card>

            {/* Owner Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-white">Owner</CardTitle>
                <CardDescription className="text-gray-300">Full system control</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-300">• Manage all users</p>
                <p className="text-sm text-gray-300">• View analytics</p>
                <p className="text-sm text-gray-300">• Financial reports</p>
                <p className="text-sm text-gray-300">• System settings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">GymPro</span>
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 GymPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
