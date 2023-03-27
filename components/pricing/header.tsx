import React from 'react'

const PricingHeader = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto py-10 md:py-12">
        <h1 className="text-3xl font-bold text-black dark:text-white md:text-6xl">定价</h1>
        <h2 className="mt-4 max-w-lg text-lg text-zinc-500 dark:text-zinc-300 md:text-xl md:leading-9">简单，按需增长付费定价</h2>
      </div>
    </header>
  )
}

export default PricingHeader
