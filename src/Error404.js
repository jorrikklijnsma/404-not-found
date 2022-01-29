import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID
};

if (process.env.NODE_ENV !== 'development') {
    TagManager.initialize(tagManagerArgs)
}

export function Error404() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-900 text-white font-mono text-center">
            <div className="h-1/3 flex flex-col justify-between">
                <h1 className="text-7xl">
                    <strong>404</strong> - Page Not Found<sup>*</sup>
                </h1>
                <div>
                    <p className="mb-8">
                        Idea stolen from <a href="https://twitter.com/renevanm" target="blank" className="font-bold">@renevanm</a>
                    </p>
                    <p className="text-sm text-gray-200">
                        Created by <a href="https://github.com/jorrikklijnsma" target="blank" className="underline">this guy</a>
                    </p>
                </div>
                <p className="fixed bottom-4 right-4 text-gray-500 text-xs">
                    <sup>*</sup>And is the answer to the URL
                </p>
            </div>
        </div>
    )
}