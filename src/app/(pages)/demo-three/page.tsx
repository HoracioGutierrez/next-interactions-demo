import Page from "@/components/layout/Page";
import CustomSkelleton from "@/components/widgets/CustomSkelleton";
import DemosWithSuspense from "@/components/widgets/DemosWithSuspense";
import { Suspense } from "react";

export default async function DemoThree() {
    
    return (
        <Page title="Demo Three">
            <section>
                <p>Este tercer demo va a tener como variante la incorporacion de Suspense, para separar la parte dinamica de la estatica y generar una mejor visualizacion progresiva del contenido.</p>
            </section>
            <section>
                <h2>Lista de Demos</h2>
                <div className="demo-container">
                    <Suspense fallback={<CustomSkelleton />}>
                        <DemosWithSuspense />
                    </Suspense>
                </div>
            </section>
        </Page>
    )
}
