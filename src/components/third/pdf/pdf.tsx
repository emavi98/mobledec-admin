/* import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
  },
  mainView: {
    margin: 20,
  },
  productView: {
    margin: 10,
  },
  textDescription: {
    marginBottom: 2,
  },
  titleProducts: {
    textAlign: 'center',
    marginBottom: 20,
  },
  titleShipping: {
    textAlign: 'center',
    marginBottom: 20,
  },
  titlePayment: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

const Pdf: React.FC<{ orderInfo }> = ({ orderInfo }) => {
  return (
    <>
      {orderInfo && (
        <Document>
          <Page size={'A4'} style={styles.page}>
            <View style={styles.mainView}>
              <Text style={styles.title}>Información del Pedido</Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.textDescription}>
                Nombre: {orderInfo.name}
                {orderInfo.last_name}
              </Text>
              <Text style={styles.textDescription}>
                DNI/CIF: {orderInfo.dni}
              </Text>
              <Text style={styles.textDescription}>
                Email: {orderInfo.email}
              </Text>
              <Text style={styles.textDescription}>
                Dirección: {orderInfo.address}
              </Text>
              <Text style={styles.textDescription}>
                Codigo Postal: {orderInfo.cp}
              </Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.titleProducts}>PRODUCTOS</Text>
              {orderInfo.products.map((product) => (
                <View style={styles.productView} key={product.sku}>
                  <Text>SKU: {product.sku}</Text>
                  <Text>Nombre del producto: {product.product_name}</Text>
                  <Text>Cantidad: {product.quantity} </Text>
                  {product.delivery_days && (
                    <Text>Días de entrega: {product.delivery_days}</Text>
                  )}
                  {product.minutes_mount && (
                    <Text>Minutos montaje: {product.minutes_mount}</Text>
                  )}
                  <Text>Subtotal del producto: {product.subTotal}</Text>
                </View>
              ))}
            </View>
            <View style={styles.mainView}>
              <Text style={styles.titleShipping}>LOGISTICA</Text>
              <Text>Forma de envío: {orderInfo.shipping_method}</Text>
              <Text>Costo del envío: {orderInfo.shipping_cost}</Text>
              {orderInfo.description_shipping && (
                <Text>
                  Descripción del envío: {orderInfo.description_shipping}
                </Text>
              )}
            </View>
            <View style={styles.mainView}>
              <Text style={styles.titlePayment}>FORMA DE PAGO</Text>
              <Text>Forma de pago: {orderInfo.payment_method}</Text>
              <Text>Pago: {orderInfo.payment}</Text>
              {orderInfo.pending_payment && (
                <Text>Pendiente por pagar: {orderInfo.pending_payment}</Text>
              )}
              {orderInfo.installment && (
                <Text>Cuotas: {orderInfo.installment}</Text>
              )}
              {orderInfo.note && <Text>Nota adicional: {orderInfo.note}</Text>}
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};

export default Pdf;
 */
