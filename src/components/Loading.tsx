import { GridLoader } from 'react-spinners'

const Loading = () => {
    return (
        <section className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] md:h-[100%] rounded-xl px-8 py-20 md:py-0 md:px-4 md:top-auto flex flex-col justify-center items-center">
            <GridLoader color='#473dff' />
        </section>
    )
}

export default Loading