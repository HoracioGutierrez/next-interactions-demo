import Page from "@/components/layout/Page";
import ServerForm from "@/components/widgets/ServerForm";
import { DemoType } from "@/models/demos";
import { getDemos } from "@/utils/actions";

export default async function DemoFour() {

    await new Promise(resolve => setTimeout(resolve, 3000))
    const { payload } = await getDemos()

    return (
        <Page title="Demo Four">
            <section>
                <p>En este nuevo demo vamos a probar una tecnologia de colocalizacion de metodos, como en PHP. Ya funciona el hecho de traer informacion dinamica desde el servidor y construir el HTML (ejecutar el componente) alla, pero ahora voy a ver si tambien funciona volver al mismo lugar desde el front directamente (enviar un formulario).</p>
            </section>
            <ServerForm/>
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
