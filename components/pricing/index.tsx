import PricingHeader from '@/components/pricing/header'
import PricingCard from './Card'
import { list } from '@/config/pricing'

const PricingPage = () => {
  return (
    <>
      <PricingHeader />
      <div className="container mx-auto pt-8">
        <h2 className="text-xl font-bold md:mt-8 md:text-4xl">选择适合您的计划</h2>
        <div className="mt-10 grid gap-4 text-left xl:grid-cols-4">
          {list.map((item, index) => {
            return <PricingCard key={index} {...item} />
          })}
        </div>
        <h2 className="my-8 text-xl font-bold md:mt-16 md:text-4xl">API 积分</h2>
        <div className="mb-10">
          PicGenius的使用计费采用API积分模式。每个积分的价格为0.01元。基本请求的计费为每个请求1积分。高级API的计费高于基本费率，具体请参考下面的价格。超出免费额度的任何请求都将从账户余额中扣除。如果账户中没有积分（即余额为零）且已经超出额度，所有请求将被阻止。
        </div>
        <div className="pb-6">
          <div className="container pt-6">
            <div className="rounded-md border border-solid border-zinc-600 bg-zinc-800 p-6">
              <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">AI服务费用</h1>
              <p className="mb-4">以下 API 都是需要账户内有积分的独家付费 API</p>
              <div className="py-4">
                <h3 className="mb-4 text-lg font-bold text-white">Midjourney</h3>
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden border border-solid border-zinc-600">
                        <table className="min-w-full divide-y divide-zinc-700">
                          <thead className="bg-zinc-900">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-zinc-500" scope="col">
                                端点
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-zinc-500" scope="col">
                                积分 (每次)
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-700  bg-zinc-900 text-white">
                            <tr>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">Text To Image</th>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">5</th>
                            </tr>
                            <tr>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">Image To Image</th>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">5</th>
                            </tr>
                            <tr>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">Voice To Image</th>
                              <th className="w-1/2 whitespace-nowrap px-6 py-4 text-left text-sm font-normal">5</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPage
