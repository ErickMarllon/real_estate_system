'use client';
import img from '@/assets/banner_cookie_policy.jpg';

import Image from 'next/image';
import privacyPolicyMockData from '../../Mocks/cookiesPolicyMock.json';
export default function CookiesPolicy() {
  return (
    <main className="policy bg-blue-50 min-h-screen py-[10dvh] relative">
      <section className="w-full relative flex justify-center lg:justify-normal items-center h-[20dvh] sm:h-[40dvh] mb-24">
        <div className=" px-4 space-y-4 z-50 md:w-1/2 left-0 flex items-center justify-center flex-col">
          <h1 className="text-zinc-800 text-3xl sm:text-5xl text-center font-semibold sm:whitespace-nowrap">
            Política de Cookies
          </h1>
        </div>
        <div className=" overflow-hidden absolute w-full min-w-lg lg:w-1/2  right-0 h-full">
          <span className="bg-black/10 absolute z-10 w-full h-full" />
          <Image
            className="w-full h-full object-cover object-center bg-no-repeat absolute md:relative z-0 "
            src={img}
            alt={'imagem de pessoa fazendo anotação.'}
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            priority
          />
        </div>
      </section>

      <section className="flex flex-col px-8 w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="space-y-4">
            <h2>{privacyPolicyMockData.title}</h2>
            {privacyPolicyMockData.summary?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <ol className="space-y-4">
              {privacyPolicyMockData.sections.map((section) => (
                <li key={section.id}>
                  <h4>
                    <span>{section.id}</span>
                    {section.section_title}
                  </h4>

                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

                  <ol className="ml-8 list-[lower-latin]">
                    {section.list_items?.map((itemList, index) => (
                      <li key={index}>
                        <p>
                          <strong>{itemList.subtitle}</strong>
                          {itemList.paragraph}
                        </p>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ol>
          </div>

          <p>
            <strong>Última atualização:</strong>
            {privacyPolicyMockData.update_date}
          </p>
        </div>
      </section>
    </main>
  );
}
