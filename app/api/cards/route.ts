export function GET(request: Request) {
    const cards = [
        {
            id: 1,
            name: "Earnbitmoon",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/32196.png",
            headline: "💸 Free crypto - Instant withdraw!",
            category: "Faucet & PTC",
            badges: ["TOP"],
            highlight: "Claim up to $2 every 5 minutes",
            features: [
                "Level up & increase your reward",
                "View PTC ads & earn free crypto",
                "Surveys and Offerwalls",
                "Earn more with account upgrade",
                "Min. withdraw: $0.20 (Instant)",
                "FaucetPay and Payeer supported, You must complete at least 30",
                "faucet claims, before being able to withdraw your funds!"
            ],
            currencies: [
                {
                    code: 'BTC',
                    name: 'Bitcoin',
                    icon: 'btc.svg',
                    network: 'Bitcoin'
                },
                {
                    code: 'LTC',
                    name: 'Litecoin',
                    icon: 'ltc.svg',
                    network: 'Litecoin'
                },
                {
                    code: 'TRX',
                    name: 'Tron',
                    icon: 'trx.svg',
                    network: 'TRC20'
                },
                {
                    code: 'BNB',
                    name: 'Binance Coin',
                    icon: 'bnb.svg',
                    network: 'BEP20'
                },
                {
                    code: 'DOGE',
                    name: 'Dogecoin',
                    icon: 'doge.svg',
                    network: 'Dogecoin'
                }
            ],
            wallet: {
                type: 'exchange',
                provider: 'Binance',
                icon: 'binance.svg',
                is_supported: true
            },
            link: "https://earnbitmoon.club/?ref=423418"
        },
        {
            id: 2,
            name: "Gemsloot",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/32112.png",
            headline: "🎉 Get paid for Playing Games!",
            category: "Offers & Surveys",
            badges: ["TOP", "GIFT"],
            highlight: "Sign up bonus! Win up to $250",
            features: [
                "10,000+ offers & surveys",
                "Exclusive VIP benefits & rewards"
            ],
            currencies: [
                {
                    code: 'BTC',
                    name: 'Bitcoin',
                    icon: 'btc.svg',
                    network: 'Bitcoin'
                },
                {
                    code: 'LTC',
                    name: 'Litecoin',
                    icon: 'ltc.svg',
                    network: 'Litecoin'
                },
                {
                    code: 'TRX',
                    name: 'Tron',
                    icon: 'trx.svg',
                    network: 'TRC20'
                },
                {
                    code: 'BNB',
                    name: 'Binance Coin',
                    icon: 'bnb.svg',
                    network: 'BEP20'
                },
                {
                    code: 'DOGE',
                    name: 'Dogecoin',
                    icon: 'doge.svg',
                    network: 'Dogecoin'
                }
            ],
            wallet: {
                type: 'exchange',
                provider: 'Binance',
                icon: 'binance.svg',
                is_supported: true
            },
            link: "https://freetoncoin.in/?ref=sukq8GZa3Z"
        },
        {
            id: 3,
            name: "CoinPayU",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1507.png",
            headline: "🏆 $1000 Weekly Offer contest",
            category: "PTC & Tasks",
            badges: ["TOP"],
            highlight: "Earn up to $0.05 per PTC ad view",
            features: [
                "Browse ads to earn",
                "Best earnings offers & surveys"
            ],
            currencies: [
                {
                    code: 'BTC',
                    name: 'Bitcoin',
                    icon: 'btc.svg',
                    network: 'Bitcoin'
                },
                {
                    code: 'LTC',
                    name: 'Litecoin',
                    icon: 'ltc.svg',
                    network: 'Litecoin'
                },
                {
                    code: 'TRX',
                    name: 'Tron',
                    icon: 'trx.svg',
                    network: 'TRC20'
                },
                {
                    code: 'BNB',
                    name: 'Binance Coin',
                    icon: 'bnb.svg',
                    network: 'BEP20'
                },
                {
                    code: 'DOGE',
                    name: 'Dogecoin',
                    icon: 'doge.svg',
                    network: 'Dogecoin'
                }
            ],
            wallet: {
                type: 'exchange',
                provider: 'Binance',
                icon: 'binance.svg',
                is_supported: true
            },
            link: "https://www.coinpayu.com/?r=Biscore"
        },
        {
            id: 4,
            name: "LuckyWatch",
            logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3865.png",
            headline: "📢 Earn more with 3 referral Tiers!",
            category: "Watch & Earn",
            badges: ["TOP"],
            highlight: "Earn money by watching videos",
            features: [
                "Boost income up to 50%",
                "Minimum withdraw $0.10"
            ],
            currencies: [
                {
                    code: 'BTC',
                    name: 'Bitcoin',
                    icon: 'btc.svg',
                    network: 'Bitcoin'
                },
                {
                    code: 'LTC',
                    name: 'Litecoin',
                    icon: 'ltc.svg',
                    network: 'Litecoin'
                },
                {
                    code: 'TRX',
                    name: 'Tron',
                    icon: 'trx.svg',
                    network: 'TRC20'
                },
                {
                    code: 'BNB',
                    name: 'Binance Coin',
                    icon: 'bnb.svg',
                    network: 'BEP20'
                },
                {
                    code: 'DOGE',
                    name: 'Dogecoin',
                    icon: 'doge.svg',
                    network: 'Dogecoin'
                }
            ],
            wallet: {
                type: 'exchange',
                provider: 'Binance',
                icon: 'binance.svg',
                is_supported: true
            },
            link: "https://usdpick.io/?ref=6HMOw9jA9-"
        }
    ]

    return Response.json({
        status: true,
        data: cards
    })
}