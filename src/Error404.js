import TagManager from 'react-gtm-module';
import getUseLocale from './lib/useLocale';

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID
};

if (process.env.NODE_ENV !== 'development') {
    TagManager.initialize(tagManagerArgs)
}

const useLocale = getUseLocale()


export function Error404() {
    return (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 text-white font-mono text-center">
            <div className="lg:h-1/3 flex flex-col justify-between">
                <div className="svg-hover flex justify-center items-center mb-6 transform scale-50">
                    <svg viewBox="21.765 5.584 310.083 85.18" width="410.083" height="85.18" xmlns="http://www.w3.org/2000/svg">
                        <path className="svg-root" d="M 21.765 35.946 L 36.829 36.131 L 63.75 90.764 L 101.565 5.786 L 331.848 5.584"/>
                    </svg>
                    <p className="ml-48 the-root absolute text-6xl">
                        163216
                        <span className="ml-16">
                            =
                        </span>
                    </p>
                    <p className="hover-me absolute text-6xl bg-cyan-100/10 px-10 py-4 rounded-md">
                        {useLocale('Hover me')}
                    </p>
                </div>
                <h1 className="text-xl sm:text-3xl xl:text-7xl mb-12">
                    <strong>404</strong> - {useLocale('Page Not Found')}<sup>*</sup>
                </h1>
                <div className="transform scale-75 md:scale-100">
                    <p className="mb-8">
                        {useLocale('Idea stolen from')}
                        {' '}
                        <a href="https://twitter.com/renevanm" target="blank" className="font-bold">@Renevanm</a>
                    </p>
                    <p className="text-sm text-gray-200">
                        {useLocale('Created by')}
                        {' '}
                        <a href="https://github.com/jorrikklijnsma" target="blank" className="underline">
                            {useLocale('this guy')}
                        </a>
                    </p>
                </div>
                <p className="absolute bottom-4 right-4 text-gray-500 text-xs">
                    <sup>*</sup>
                        {useLocale('And is the answer to the URL')}
                </p>
            </div>
        </div>
    )
}