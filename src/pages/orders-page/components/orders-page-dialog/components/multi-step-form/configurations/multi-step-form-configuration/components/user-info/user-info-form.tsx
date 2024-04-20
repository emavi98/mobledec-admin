import {
  SearchBardShadcnMbd,
  Accordion,
  Badge,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  Checkbox,
  Button,
  Separator,
} from 'components';

import { FormWrapper } from 'pages/orders-page/wrappers';
import { InvoicingInfo } from './components/invoicing-info';
import { ShippingInfo } from './components/shipping-info';
import { useState } from 'react';
import { CircleX } from 'lucide-react';
// Services
import { useUsersQuery } from 'services/users-service';

const UserInfoForm = () => {
  const [isShowedInfo, setIsShowedInfo] = useState<boolean>(false);
  const [keyword, setKeyword] = useState('');
  const { data, isLoading, error } = useUsersQuery(keyword);

  return (
    <FormWrapper title="Datos de cliente">
      <div className="flex items-center space-x-2 pt-2 pb-4">
        <Checkbox
          id="terms"
          checked={isShowedInfo}
          onCheckedChange={() => setIsShowedInfo(!isShowedInfo)}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Es factura simplificada
        </label>
      </div>
      <div className=" pt-2 pb-4">
        <Separator />
      </div>
      {!isShowedInfo && (
        <>
          <SearchBardShadcnMbd
            {...{ keyword, setKeyword, data, isLoading, error }}
          />
          <div className="flex flex-wrap pt-2 pb-2">
            <Badge>Nombre del cliente</Badge>
            <button>
              <CircleX />
            </button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Facturación</AccordionTrigger>
              <AccordionContent>
                <InvoicingInfo />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Envio</AccordionTrigger>
              <AccordionContent>
                <ShippingInfo />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="pt-3">
            <Button>Crear Cliente</Button>
          </div>
        </>
      )}
    </FormWrapper>
  );
};

export { UserInfoForm };
