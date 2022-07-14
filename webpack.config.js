const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/template/index.html",
    }),
];

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    entry: "./src/scripts/index.tsx",

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        },
                    },
                    {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },

    plugins: plugins,

    target: target,

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@app": path.resolve(__dirname, "./src/scripts/"),
            "@components": path.resolve(__dirname, "./src/scripts/components/"),
            "@pages": path.resolve(__dirname, "./src/scripts/pages/"),
            "@services": path.resolve(__dirname, "./src/scripts/services/"),
            "@store": path.resolve(__dirname, "./src/scripts/store/"),
            "@tsTypes": path.resolve(__dirname, "./src/scripts/types/"),
            "@helpers": path.resolve(__dirname, "./src/scripts/helpers"),
            "@hocs": path.resolve(__dirname, "./src/scripts/hocs"),
            "@adminComponents": path.resolve(__dirname, "./src/scripts/components/admin/"),
            "@assets": path.resolve(__dirname, "./src/assets/"),
        }
    },

    devServer: {
        static: path.join(__dirname, "dist"),
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};