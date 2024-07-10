import { Injectable } from '@/interceptor'
import { NextResponse } from 'next/server'
import { resolve } from 'path'
import { dreelize, trielize } from './tree'

class Route {
  @Injectable()
  static async GET() {
    const root = resolve(process.cwd(), './src/app/blog')
    const dree = dreelize(root)
    if (!dree) return NextResponse.json('Not Found', { status: 404 })
    const tree = trielize('', dree)
    return NextResponse.json(tree)
  }
}

export const { GET } = Route
