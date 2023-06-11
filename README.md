# gtag-ext
a lightweight extension to Google's gtag.js

the original `gtag()` callback based function from Google *gtag.js* push any input data to a queue, `dataLayer`, to process asynchronously,
refer [original gtag example](https://developers.google.com/tag-platform/gtagjs/configure#step_2_send_data_with_event);
however, the original `gtag()` is often shown and used as a *fire-and-forget* manner, 
it doesn't provide a promised based async function for sequence control.

gtag-ext provide a thin wrapper function `gtagAsync()` that is async and promised based for ease of use.

> note that gtag-ext is just extension to original `gtag.js` library, any data that is pushed into `dataLayer` queue will still be process and handle by `gtag.js` , [original gtag installation](https://developers.google.com/tag-platform/gtagjs/install) is still needed for actual use-cases. 