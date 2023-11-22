import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFModel } from "@/interfaces/general-dto";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
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
    textAlign: "center",
    marginBottom: 20,
  },
  titleShipping: {
    textAlign: "center",
    marginBottom: 20,
  },
  titlePayment: {
    textAlign: "center",
    marginBottom: 20,
  },
});

const PDF: React.FC<{ info: PDFModel }> = ({ info }) => {
  return (
    <>
      {info && (
        <Document>
          <Page size={"A4"} style={styles.page}>
            <View style={styles.mainView}>
              <Text style={styles.title}>Información del Pedido</Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.textDescription}>
                Nombre: {info.name}
                {info.last_name}
              </Text>
              <Text style={styles.textDescription}>DNI/CIF: {info.dni}</Text>
              <Text style={styles.textDescription}>Email: {info.email}</Text>
              <Text style={styles.textDescription}>
                Dirección: {info.address}
              </Text>
              <Text style={styles.textDescription}>
                Codigo Postal: {info.cp}
              </Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.titleProducts}>PRODUCTOS</Text>
              {info.products.map((product) => (
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
              <Text>Forma de envío: {info.shipping_method}</Text>
              <Text>Costo del envío: {info.shipping_cost}</Text>
              {info.description_shipping && (
                <Text>Descripción del envío: {info.description_shipping}</Text>
              )}
            </View>
            <View style={styles.mainView}>
              <Text style={styles.titlePayment}>FORMA DE PAGO</Text>
              <Text>Forma de pago: {info.payment_method}</Text>
              <Text>Pago: {info.payment}</Text>
              {info.pending_payment && (
                <Text>Pendiente por pagar: {info.pending_payment}</Text>
              )}
              {info.installment && <Text>Cuotas: {info.installment}</Text>}
              {info.note && <Text>Nota adicional: {info.note}</Text>}
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};

export default PDF;
