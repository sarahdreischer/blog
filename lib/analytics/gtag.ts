interface GTagEvent {
    action: string;
    category: string;
    label: string;
    value: number;
}

export const GA_TRACKING_ID = "G-HMK8RHT141";

// Read more on https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

// Read more on https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};