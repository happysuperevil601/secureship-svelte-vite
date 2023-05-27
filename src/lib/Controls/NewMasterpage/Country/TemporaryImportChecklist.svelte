<script lang="ts">
  export let HideATACarnet = '';
  export let CountryName = '';
  export let ExtraItem1 = '';
  export let ExtraItem2 = '';
  export let ExtraItem3 = '';
  export let ExtraItem4 = '';
  export let ExtraItem5 = '';
</script>

<style lang="scss">

</style>

<section class="temporary-import-checklist">
    <h5>Temporary Imports Checklist</h5>
    <ul class="check-mark-list">
        <li>Commercial Invoice clearly stating 'Temporary Import'. This must be written in the General Description
            section and the Detailed Description of Goods.
            (<a href="#temporary-import-ci-only" class="smoothScroll"
                title="See example of how to declare a Temporary import on your commercial invoice for your boxes or parcels to {CountryName}">see
                sample</a>)
        </li>
        <li>The goods arrive and leave in the same condition, i.e. they undergo no repairs nor are they used in
            manufacturing
        </li>
        <li>Stay no longer than the period listed above</li>
        {#if !HideATACarnet}
            <li>Include your ATA Carnet with your shipment (if applicable)</li>
        {/if}
        <li>Include the expected return date or the date that it was originally received within the country (whichever
            applies)
        </li>
        {#if ExtraItem1}
            <li>{ExtraItem1}</li>
        {/if}
        {#if ExtraItem2}
            <li>{ExtraItem2}</li>
        {/if}
        {#if ExtraItem3}
            <li>{ExtraItem3}</li>
        {/if}
        {#if ExtraItem4}
            <li>{ExtraItem4}</li>
        {/if}
        {#if ExtraItem5}
            <li>{ExtraItem5}</li>
        {/if}
        <li>Any above listed items not listed in this checklist</li>
    </ul>
</section>
