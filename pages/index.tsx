import React from "react";
import { fetchRates, Rates } from "../api";
import Layout from "../components/layout";
import Row from "../components/rate-row";

interface Props {
    rates: Rates;
}

class IndexPage extends React.Component<Props> {
    static async getInitialProps() {
        const rates = await fetchRates();
        return { rates };
    }
    render() {
        const { rates } = this.props;
        return (
            <Layout>
                {
                    Object.keys(rates).map(c => (<Row currency={c} rate={rates[c]}/>))
                }
            </Layout>
        );
    }
}

export default IndexPage;