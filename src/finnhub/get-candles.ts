// https://finnhub.io/api/v1/stock/peers?symbol=BBIG&token=c4401l2ad3iftpcmq33g
import axios from "axios";
import { FINNHUB_API_KEY } from "../constants";
import Moment from "moment";

let moment = Moment;

const GetSimilar = (req: any, res: any) => {
	const symbol: string | undefined | null = req.query.symbol;
	const {
		startDate,
		endDate,
		resolution,
	}: {
		startDate: string;
		endDate: string;
		resolution: "1" | "5" | "15" | "30" | "60" | "D" | "W" | "M";
	} = req.query;
	let url = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${startDate}&to=${endDate}&token=${FINNHUB_API_KEY}`;
	if (symbol?.length! > 0) {
		try {
			axios
				.get(url)
				.then((response: any) => {
					console.log(response.data);

					let closes = response.data.c!;
					let opens = response.data.o!;
					let highs = response.data.h!;
					let lows = response.data.l!;
					let volumes = response.data.v!;
					let dates = response.data.t!;
					let status = response.data.s!;

					let data = [];

					try {
						for (let i = 0; i < closes.length; i++) {
							data.push({
								close: closes[i],
								open: opens[i],
								high: highs[i],
								low: lows[i],
								volume: volumes[i],
								time: moment(dates[i] * 1000).format("YYYY-MM-DD"),
								epoch: dates[i],
							});
						}
					} catch (error) {
						data.push({
							msg: "No data found",
							error: error,
						});
					}
					if (status === "ok") res.status(200).json(data);
					else res.status(400).json(data);
				})
				.catch((error) => {
					res.status(400).json({
						message: error.message,
					});
				});
		} catch (error) {
			res.status(400).json({
				error,
			});
		}
	} else {
		res.status(400).json({
			message: "Please provide a symbol",
		});
	}
};

module.exports = GetSimilar;
