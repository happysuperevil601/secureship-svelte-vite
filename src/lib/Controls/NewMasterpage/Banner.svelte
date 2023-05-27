<script>
  export let BackgroundImageUrl = 'https://test.secureship.ca/images/country-pages/shipping-to-italy-from-canada.jpg';
  export let H1Text = '';
  export let H2Text = '';
  export let ButtonUrl = '';
  export let ButtonTitle = '';
  export let ButtonText = '';
</script>

<style lang="scss">

</style>

<section id="banner" class="page-banner HC_text-align-center" style={`background-image: url('${BackgroundImageUrl}')`}>
    <div style="margin: 0px auto; max-width: 1200px" id="homeBanner">
        <div class="row">
            <div class="col-md-11 col-md-offset-1 col-sm-11 col-sm-offset-1 col-xs-10 offset-md-1 offset-sm-1 offset-1">
                {#each H1Text.split('<br>') as h}
                    <h1 class="VP">{h}</h1>
                {/each}
                {#each H2Text.split('<br>') as h}
                    <h2 class="VP2">{h}</h2>
                {/each}
            </div>
        </div>
        <div class="row" style="display: block; flex-wrap: nowrap">
            <div style="height: 60px;">&nbsp;</div>
            <div class="col-md-offset-1 col-sm-offset-1 col-xs-offset-1 offset-md-1 offset-sm-1 offset-1">
                {#if ButtonUrl}
                    <a href="{ButtonUrl.toLowerCase()}" title="{ButtonTitle}"
                       class="homeMainGetEstimate">{ButtonText}</a>
                {/if}
            </div>
            <br/>
        </div>
    </div>
</section>
