'use client'

import { PROMPT } from '@/lib/constants/app.constant'
import { useMutation } from '@tanstack/react-query'
import {
  AlertCircle,
  Bot,
  FileCode,
  Flame,
  Info,
  Loader2,
  Lock,
  Menu,
  Search,
  SendHorizontal,
  ShieldAlert,
} from 'lucide-react'
import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'

const SYSTEM_ROLE = 'assistant'
const USER_ROLE = 'human'

interface Prompt {
  role: string
  content: string
  timestamp: Date
}

export const SuperSecChat = () => {
  const [messages, setMessages] = useState<Prompt[]>([
    {
      role: 'system',
      content: PROMPT.SUPERSEC_AI_SYSTEM,
      timestamp: new Date(Date.now()),
    },
    // {
    //   role: SYSTEM_ROLE,
    //   content: '👋 Hi! I am SuperSec AI. Ask me anything about Solana security.',
    // },
  ])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const securityTopics = [
    { icon: <ShieldAlert size={18} />, text: 'Smart Contract Audits' },
    { icon: <FileCode size={18} />, text: 'Code Vulnerability Analysis' },
    { icon: <AlertCircle size={18} />, text: 'Recent Solana Exploits' },
    { icon: <Lock size={18} />, text: 'Security Best Practices' },
    { icon: <Flame size={18} />, text: 'Mango security exploit' },
  ]

  const formatDate = (date: Date) =>
    date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

  const dispatchSecurityTop = (topic: string) => {
    const newMessages = [
      ...messages,
      { role: USER_ROLE, content: topic, timestamp: new Date(Date.now()) },
    ]
    setMessages(newMessages)
    mutation.mutate({
      messages: newMessages,
      // .filter((m) => m.role !== SYSTEM_ROLE), // don't send intro
    })
  }

  const mutation = useMutation({
    mutationFn: async ({ messages }: { messages: Prompt[] }) => {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      })
      if (!res.ok) throw new Error('Failed to get response')
      return res.json()
    },
    onSuccess: (data) => {
      console.log('data', data)
      setMessages((prev) => [
        ...prev,
        { role: SYSTEM_ROLE, content: data, timestamp: new Date(Date.now()) },
      ])
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
  })

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSend = () => {
    if (!input.trim()) return
    const newMessages = [
      ...messages,
      { role: USER_ROLE, content: input, timestamp: new Date(Date.now()) },
    ]
    setMessages(newMessages)
    mutation.mutate({
      messages: newMessages,
      // .filter((m) => m.role !== SYSTEM_ROLE), // don't send intro
    })
    setInput('')
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className='h-screen flex flex-col bg-background text-gray-100'>
      {/* TopBar */}
      <div className='bg-background border-b border-gray-700 px-4 md:px-6 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='md:hidden text-gray-400 hover:text-white'
          >
            <Menu size={20} />
          </button>
          <div className='bg-primary rounded-lg p-1'>
            <ShieldAlert size={22} className='text-gray-900' />
          </div>
          <div>
            <h1 className='font-bold text-xl'>SuperSec AI</h1>
            <p className='text-xs text-gray-400 hidden sm:block'>
              Solana Security Intelligence
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse'></div>
          <span className='text-xs font-medium text-emerald-400 hidden sm:inline'>
            Active Security Monitoring
          </span>
          <span className='text-xs font-medium text-emerald-400 sm:hidden'>
            Active
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex overflow-hidden'>
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden'
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Left Sidebar */}
        {/* <div className='w-64 bg-gray-800 border-r border-gray-700 flex flex-col'> */}
        <div
          className={`w-64 bg-background border-r border-gray-700 flex flex-col absolute md:relative z-20 h-full transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Search Bar */}
          <div className='p-3'>
            <div className='relative'>
              <Search
                size={16}
                className='absolute left-3 top-2.5 text-gray-500'
              />
              <input
                type='text'
                placeholder='Search security topics...'
                className='w-full pl-9 pr-3 py-2 bg-gray-700 text-sm rounded-lg border border-gray-600 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none'
              />
            </div>
          </div>

          {/* Suggested Topics */}
          <div className='p-3 border-b border-gray-700'>
            <h3 className='text-xs uppercase font-semibold text-gray-400 mb-2'>
              Suggested Topics
            </h3>
            <div className='space-y-2'>
              {securityTopics.map((topic, i) => (
                <div
                  key={i}
                  className='flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer group transition-colors'
                  onClick={() => dispatchSecurityTop(topic.text)}
                >
                  <div className='text-primary group-hover:text-emerald-400'>
                    {topic.icon}
                  </div>
                  <span className='text-sm'>{topic.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Conversations */}
          <div className='hidden p-3 flex-1 overflow-y-auto'>
            <h3 className='text-xs uppercase font-semibold text-gray-400 mb-2'>
              Recent Conversations
            </h3>
            <div className='space-y-1'>
              <div className='p-2 bg-gray-700 rounded-md'>
                <div className='text-xs text-emerald-400 mb-1'>Today</div>
                <div className='text-sm font-medium'>
                  Solana Program Vulnerabilities
                </div>
              </div>
              <div className='p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
                <div className='text-xs text-gray-500 mb-1'>Yesterday</div>
                <div className='text-sm'>NFT Security Analysis</div>
              </div>
              <div className='p-2 hover:bg-gray-700 rounded-md cursor-pointer'>
                <div className='text-xs text-gray-500 mb-1'>May 1</div>
                <div className='text-sm'>DeFi Protocol Review</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {messages.filter((i) => i.role !== 'system').length === 0 && (
            <div className='flex flex-col items-center justify-center py-12 text-center'>
              <Bot className='h-16 w-16 mb-4' />
              <h2 className='text-2xl font-bold mb-2'></h2>
              <p className=''>Your solana secruity assistant</p>
              <p className='text-muted-foreground'>Send a message to begin</p>
            </div>
          )}
          {/* Messages */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {messages
              .filter((i) => i.role !== 'system')
              .map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === USER_ROLE ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-3xl rounded-lg px-4 py-3 ${
                      message.role === USER_ROLE
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-800 border border-gray-700'
                    }`}
                  >
                    {message.role === SYSTEM_ROLE && (
                      <div className='flex items-center mb-2'>
                        <div className='bg-primary rounded-md p-0.5 mr-2'>
                          <ShieldAlert size={14} className='text-gray-900' />
                        </div>
                        <span className='font-medium text-primary text-sm'>
                          SuperSec AI
                        </span>
                        <span className='text-xs text-gray-500 ml-2'>
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                    )}
                    <div
                      className={`text-sm ${
                        message.role === USER_ROLE ? '' : 'text-gray-200'
                      }`}
                    >
                      {/* {typeof message.content === 'string'
                        ? message.content
                        : message.content} */}
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          code({ className, children }) {
                            const match = /language-(\w+)/.exec(className || '')
                            const inline = !match
                            return !inline && match ? (
                              <SyntaxHighlighter
                                style={atomDark}
                                language={match[1]}
                                PreTag='div'
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={className}>{children}</code>
                            )
                          },
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                    {message.role === USER_ROLE && (
                      <div className='text-xs text-emerald-300 mt-1 text-right'>
                        {formatDate(message.timestamp)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Info Bar */}
          <div className='bg-background border-t border-gray-700 px-4 py-2 flex items-center text-xs text-gray-400'>
            <Info size={14} className='mr-2' />
            <span>
              SuperSec AI is specialized in Solana security analysis. For
              general questions, please use regular support channels.
            </span>
          </div>

          {/* Input Area */}
          <div className='border-t border-gray-700 p-4'>
            <div className='flex space-x-2'>
              <div className='flex-1 relative'>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder='Ask about Solana security...'
                  className='w-full terminal-input rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 resize-none outline-none placeholder-gray-500'
                  rows={1}
                />
                <div className='absolute right-2 bottom-2 flex space-x-1 text-gray-500'>
                  <span className='text-xs p-1 bg-gray-700 rounded text-gray-400'>
                    Shift + Enter for new line
                  </span>
                </div>
              </div>
              <button
                onClick={handleSend}
                className='bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg p-3 flex items-center justify-center transition-colors'
              >
                {mutation.status === 'pending' ? (
                  <Loader2 size={20} className='animate-spin' />
                ) : (
                  <SendHorizontal size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
