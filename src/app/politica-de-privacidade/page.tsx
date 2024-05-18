'use client';
import img from '@/assets/banner_privacy_policy.jpg';

import privacyPolicyMockData from '@/Mocks/PrivacyPolicyMock.json';
import Image from 'next/image';
export default function PrivacyPolicy() {
  return (
    <main className="policy bg-blue-50 min-h-screen py-[10dvh] relative">
      <section className="w-full relative flex justify-center lg:justify-normal items-center h-[40dvh] mb-24">
        <div className=" px-4 space-y-4 z-50 md:w-1/2 left-0 ">
          <span className=" z-50 bg-red-600 w-[200px]">
            <h1 className="text-3xl sm:text-5xl text-center font-semibold sm:whitespace-nowrap">
              Política de Privacidade
            </h1>
            <p className="text-sm text-center mb-3 font-semibold">
              Estamos ao seu lado para tratar seus dados pessoais com cuidado e
              segurança.
            </p>
          </span>
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
                  <ol className="ml-4 ">
                    {section.sub_sections?.map((item) => (
                      <li key={item.id}>
                        <h4>
                          <span>{item.id}</span>
                          {item.section_title}
                        </h4>
                        {item.paragraphs?.map((paragraph, index) => (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                        <ol className="ml-4 list-[lower-latin]">
                          {item.list_items?.map((itemList, index) => (
                            <li
                              key={index}
                              className={`${
                                item.list_items.length - 1 === index && 'mb-4'
                              } `}
                            >
                              <p>
                                {'subtitle' in itemList && (
                                  <strong>{itemList.subtitle}</strong>
                                )}
                                {itemList.paragraph}
                              </p>
                            </li>
                          ))}
                        </ol>
                        {item.continuation_paragraphs?.map(
                          (paragraph, index) => (
                            <p key={index} className="mb-4">
                              {paragraph}
                            </p>
                          ),
                        )}
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
