<script>
  export let CountryName = 'Italy';
  export let CountryNameAlternative = 'Italy';
  let Show3rdLevel = false; // Assign the appropriate value here

  import {afterUpdate} from 'svelte';

  afterUpdate(() => {
    const breadcrumbsJson = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Secureship',
          item: window.location.origin,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Guides',
          item: `${window.location.origin}/shipping`,
        },
      ],
    };

    if (Show3rdLevel) {
      breadcrumbsJson.itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        name: `Canada to ${CountryNameAlternative}`,
        item: `${window.location.origin}/shipping/canada-to-${CountryName.toLowerCase()}`,
      });
    }

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.innerHTML = JSON.stringify(breadcrumbsJson);

    document.head.appendChild(scriptTag);
  });
</script>

<style lang="scss">

</style>

<section class="bread-crumbs">
    <ol>
        <li>
            <a href="/"
               title="Secureship is a Multi-Carrier Business shipping platform that leverages its buying power to get you the best and cheapest prices on shipping">Secureship</a>
        </li>
        <li>
            <span>></span><a href="/shipping" title="International Shipping Guides for countries all over the world">Guides</a>
        </li>
        {#if Show3rdLevel}
            <li>
                <span>></span><a href={`/shipping/canada-to-${CountryName.toLowerCase().replace(' ', '-')}`}
                                 title={`Find the best and cheapest way to ship to ${CountryNameAlternative} from Canada`}>Shipping
                to {CountryNameAlternative} from Canada</a>
            </li>
        {/if}
    </ol>
</section>
