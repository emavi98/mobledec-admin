import ModalPortal from "../../components/Modal/ModalPortal";

export const DashboardPage = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="border p-4">
            <div className="border-[2px] border-slate-600 mt-6 p-4 rounded-lg inline-block">
              <h2>VENTAS BRUTAS HOY 1200 €</h2>
              <h2>COSTE DE VENTA 500 €</h2>
              <h2>BENEFICIO BRUTO 1200 €</h2>
            </div>
            <ModalPortal />
          </div>
        </div>
      </main>
    </>
  );
};
