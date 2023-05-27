<script>
  import {onMount} from 'svelte';

  export let CountryName = 'Italy'; // Assign the appropriate value here

  onMount(() => {
    const smoothScrollLinks = document.querySelectorAll('.smoothScroll');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
      });
    });
  });
</script>

<style lang="scss">

</style>

<aside>
    <nav>
        <ul id="floatingMenu">
            <li>
                <a
                        id="floating-rates"
                        href="#shipping-rates"
                        class="smoothScroll"
                        title={`Find shipping rates and estimates for your packages or shipments to ${CountryName}`}
                >
                    <i class="fas fa-truck"></i><span>Shipping Rates</span>
                </a>
            </li>
            <li>
                <a
                        id="floating-tracking"
                        href="#tracking-info"
                        class="smoothScroll"
                        title={`How does tracking work for ${CountryName}`}
                >
                    <i class="fas fa-chart-line"></i><span>Tracking</span>
                </a>
            </li>
            <li>
                <a
                        id="floating-tos"
                        href="#types-of-shipments"
                        class="smoothScroll"
                        title={`Types of shipments to ${CountryName}`}
                >
                    <i class="fas fa-boxes"></i><span>Types of Shipments</span>
                </a>
            </li>
            <li>
                <a
                        id="floating-docs"
                        href="#required-docs"
                        class="smoothScroll"
                        title={`Documents required for shipments to ${CountryName}`}
                >
                    <i class="fas fa-file-alt"></i><span>Required Docs</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>
