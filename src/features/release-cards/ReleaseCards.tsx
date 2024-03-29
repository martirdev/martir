import {memo} from 'react';
import useSWR from 'swr';

import {ReleaseCard} from '_entities/release-card';
import {getCurrent} from '_shared/api/releases/releases-current';
import {Container} from '_shared/container';

const TEXT_FOR_CARDS = {
  last: 'Последняя сборка',
  test: 'Тестируемая версия',
  stable: 'Стабильная версия'
};

const ReleaseCards = memo(function ReleaseCards() {
  const {data} = useSWR('GET_CURRENT_RELEASES', getCurrent);

  return (
    <Container px={3} py={3} className="inline-flex w-full gap-4 overflow-auto bg-common-darkest-gray">
      {data && (
        <>
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-bold-2">{TEXT_FOR_CARDS.last}</div>
            <ReleaseCard
              heading={data.last_builded.name}
              paragraph={{
                link: `${data.last_builded.storage_url}`,
                date: `${data.last_builded.created_at}`
              }}
              onClickBuild={() => {
                console.log('Собрать');
              }}
              onClickDeploy={() => {
                console.log('Раскатить');
              }}
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-bold-2">{TEXT_FOR_CARDS.test}</div>
            <ReleaseCard
              heading={data.prestable.name}
              paragraph={{
                link: `${data.prestable.storage_url}`,
                date: `${data.prestable.deployed_at}`
              }}
              onClickRelease={() => {
                console.log('Раскатить');
              }}
              onClickUnDeploy={() => {
                console.log('Откатить');
              }}
            />
          </div>
          <div className="flex flex-1  flex-col gap-4">
            <div className="text-bold-2">{TEXT_FOR_CARDS.stable}</div>
            <ReleaseCard
              heading={data.stable.name}
              paragraph={{
                link: `${data.stable.storage_url}`,
                date: `${data.stable.published_at}`
              }}
              onClickUnDeploy={() => {
                console.log('Откатить');
              }}
            />
          </div>
        </>
      )}
    </Container>
  );
});
export {ReleaseCards};
