import Page from "@/components/layout/Page";
import { DemoType } from "@/models/demos";
import { getDemos } from "@/utils/actions";

export default async function DemoTwo() {

    await new Promise(resolve => setTimeout(resolve, 3000))
    const { payload } = await getDemos()

    return (
        <Page title="Demo Two">
            <section>
                <p>En este otro demo intento demostrar lo mismo que en el demo uno pero el leve cambio es que el metodo para pedir demos viene de un archivo utils en vez de estar colocalizado en el mismo archivo del componente.</p>
            </section>
            <section>
                <h2>Lista de Demos</h2>
                <div className="demo-container">
                    {payload.demos.map((demo: DemoType, i: number) => {
                        return (
                            <article key={i} className="demo">
                                <h3>{demo.name}</h3>
                                <p>{demo.payload}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Page>
    )
}
