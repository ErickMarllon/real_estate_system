'use client';

import CurrencyFormatter from '@/functions/CurrencyFormatter';
import listPropertiesData from '@/mocks/listPropertiesMock';
import CondominiumFeatures from '../components/CondominiumFeatures';
import PropertyFeatures from '../components/FeaturesProperty';
import FeaturesPropertyBasic from '../components/FeaturesPropertyBasic';
import ImageSections from '../components/ImageSections';
import WhatsappForm from '../components/WhatsappForm';

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const filteredData =
    listPropertiesData &&
    params.slug &&
    listPropertiesData.filter((el) => el.slug.trimEnd() === params.slug);
  const error = { hasError: false };
  return (
    <main className="py-[15dvh] flex justify-center ">
      <div className="w-full max-w-screen-xl px-6 ">
        <section>
          {filteredData &&
            filteredData.map((el) => (
              <div key={el.id} className="space-y-10">
                <ImageSections imgs={el.images} />
                <div className="flex flex-col lg:flex-row space-y-24 lg:space-y-0">
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-lg font-semibold text-cyan-950">
                        {el.title}
                      </h2>
                      <p className="text-xs">Código do imóvel: {el.slug}</p>
                      <ul className="flex items-center pt-6 divide-x divide-dashed divide-zinc-500/50">
                        <li className="pr-2 sm:pr-4">
                          <p className="text-sm">Preço</p>
                          <p className="text-sm font-semibold text-cyan-950">
                            {CurrencyFormatter(el.price)}
                          </p>
                        </li>
                        {el?.condominiumPrice && (
                          <li className="px-2 sm:px-4">
                            <p className="text-sm">Condomínio</p>
                            <p className="text-sm font-semibold text-cyan-950">
                              {CurrencyFormatter(el.condominiumPrice)}
                            </p>
                          </li>
                        )}
                        {el?.iptu && (
                          <li className="px-2 sm:px-4">
                            <p className="text-sm">IPTU</p>
                            <p className="text-sm font-semibold text-cyan-950">
                              {CurrencyFormatter(el.iptu)}
                            </p>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="max-w-screen-sm">
                      <h2 className="text-lg font-semibold text-cyan-950">
                        Descrição
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: el.description.replace(/\n/g, '<br/>'),
                        }}
                      />
                    </div>
                    <FeaturesPropertyBasic
                      area={el.area}
                      bedrooms={el.bedrooms}
                      bathrooms={el.bathrooms}
                      garagesSpaces={el.garagesSpaces}
                    />
                    <PropertyFeatures {...el.propertyFeatures} />
                    <CondominiumFeatures {...el.condominiumFeatures} />
                  </div>

                  <WhatsappForm />
                </div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}
