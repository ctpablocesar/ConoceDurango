import { MoralisProvider } from "react-moralis";
import { AppRouter } from "./AppRouter";

export const ConoceDurango = () => {
    return (
        <MoralisProvider appId="383414847825" serverUrl="http://smart1.zeniq.network:8545">
            <AppRouter />
        </MoralisProvider>
    )
}
