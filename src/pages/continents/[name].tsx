import { GetServerSideProps } from "next";
import Header from "../../components/Header";

interface ContinentProps {
    continent: {
        name: string;
    }
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <>
            <Header />
            {continent.name}
        </>
    )
}     

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const { name } = params;

    return {
        props: {
            continent: {
                name
            }
        }
    }
}