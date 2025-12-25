import type { AIMessageChunk } from 'langchain'
import { getLangChainLLMConfig } from './config.js'
import { summarizePostPrompt } from './prompts.js'

export async function summarizePost(post: string): Promise<AIMessageChunk> {
  const llm = getLangChainLLMConfig()

  const formattedPrompt = await summarizePostPrompt.format({ post: post })
  console.log('Formatted Prompt:', formattedPrompt)
  const response = await llm.invoke(formattedPrompt)
  return response
}
