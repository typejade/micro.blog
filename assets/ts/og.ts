document.addEventListener("DOMContentLoaded", () => {
    const ogs:NodeListOf<HTMLElement> = document.querySelectorAll(".og-container");

    ogs.forEach((og_container) => {
        const og: HTMLElement = og_container.querySelector('.og') as HTMLElement;

        const url = og.dataset.url || '';
        const niceUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
        const title = og.dataset.title || '';
        const snippet = og.dataset.snippet || '';
        
        let innerHTML: string = "";

        if (snippet.length > 0) {
            innerHTML +=
            `
                <p class="og-snippet">${snippet}</p>
            `;
        }

        innerHTML +=
        `
            <div class="og-metadata">
                <div>
                    ${title ? `<span class="og-title">${title}</span>` : ''}
                    <div class="og-url-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="og-url-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>                  
                        <span class="og-url">${niceUrl}</span>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </div>
        `;

        const a: HTMLAnchorElement = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');

        og.innerHTML = innerHTML;
        og.removeAttribute('data-url');
        og.removeAttribute('data-title');
        og.removeAttribute('data-snippet');
        og.classList.remove('og-hide');

        a.appendChild(og);
        og_container.appendChild(a);
    });
});