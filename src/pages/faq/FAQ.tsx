import {Accordeon} from '@shared/accordeon';
import {Container} from '@shared/container';

function FAQ() {
  return (
    <Container px={6} className="py-24" width="large">
      <h1 className="text-page-title uppercase">FAQ</h1>
      <div className="mt-10 text-paragraph [&>*]:mb-6">
        <Accordeon title="Как вернуть покупку" opened>
          <div className="[&>*]:mb-2">
            <p>
              Товары, приобретенные в интернет магазине Martir или у авторизованного дистрибьютора Martir, принимаются к
              обмену в том месте откуда был произведено приобретения товара.
            </p>
            <p>
              Изделия, приобретенные в интернет магазине Martir, необхоидмо возвращать по адрессу регестрации компании.
              К возврату принимаются только изделия, не бывшие в употреблении, при условии предъявления документа,
              подтверждающего факт совершения покупки.
            </p>
            <p>
              Изделия, приобретенные онлайн, принимаются Martir только к обмену на другое изделие или к возврату с
              предоставлением клиенту товарного кредита или подарочной карты. Для получения подробных инструкций по
              возврату можете обратиться в тех. поддержку через сайт, телефонный звонок +7(999)999-99-99 или направив
              письмо по адрессу support@martir.ru
            </p>
          </div>
        </Accordeon>
        <Accordeon title="К кому обратиться за помощью по поводу моего изделия" opened>
          <div className="[&>*]:mb-2">
            <p>
              Если у вас возникли какие-либо вопросы или проблемы с вашим изделием, не стесняйтесь обращаться в нашу
              службу поддержки. Наши опытные специалисты всегда готовы помочь вам и ответить на все ваши вопросы. Вы
              можете связаться с нами по адресу support@martir.ru, и мы обязательно ответим вам в кратчайшие сроки.
            </p>
            <p>
              Мы всегда стремимся обеспечить максимально качественный сервис для наших клиентов, поэтому не стесняйтесь
              обращаться к нам, если у вас есть какие-либо вопросы или замечания. Мы будем рады помочь вам в любое
              время.
            </p>
          </div>
        </Accordeon>
      </div>
    </Container>
  );
}

export default FAQ;
