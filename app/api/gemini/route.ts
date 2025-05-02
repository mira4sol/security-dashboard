import { ChatGoogleGenerativeAI } from '@langchain/google-genai'
import { NextResponse } from 'next/server'

const llm = new ChatGoogleGenerativeAI({
  model: 'gemini-2.0-flash',
  temperature: 0,
})

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json()

    if (!messages || messages.length === 0)
      return NextResponse.json(
        { error: 'message or messages required' },
        { status: 400 }
      )

    const response = await llm.invoke(messages)

    return NextResponse.json(response.content)
  } catch (error: any) {
    console.log('Error:', error?.response)
    console.log('Error message:', error?.message)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 400 })
  }
}
