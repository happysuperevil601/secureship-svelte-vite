<script>
  import {onMount} from 'svelte';

  export let CountryName = '';
  export let Location1 = '';
  export let Location2 = '';
  export let Location3 = '';
  export let Location4 = '';
  export let Location5 = '';
  export let Location6 = '';
  export let TrackDate = new Date();

  // Function to format the date
  function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(date);
  }

  onMount(() => {
    // Fetch dynamic data or perform any initialization logic here
  });
</script>

<style lang="scss">

</style>

<section id="tracking-info" class="tracking-info">
    <i class="fas fa-chart-line"></i>
    <h2>Easy Tracking Information</h2>
    <h4>Shipments through Secureship come with full, easy to read tracking information to {CountryName}</h4>
    <div>
        <div class="tracking-info-preview">
            <div class="tracking-meta">
                <div class="fedex">
                    <img src="https://test.secureship.ca/images/country-pages/fedex.png"
                         alt="Full tracking information for parcels to {CountryName} is available with Secureship"/>
                </div>
                <div class="tracking-number">
                    <div>Tracking #: 780123123123</div>
                    <div>Tel: 1-800-463-3339</div>
                </div>
            </div>
            <div class="delivery-note">
                Signed By: Pikwalia @ Residence
            </div>
            <div class="timeline animation-target">
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(new Date(TrackDate.setDate(TrackDate.getDate() + 3)))}</h5>
                        <small>8:49 am</small>
                    </div>
                    <div class="location">
                        <h5>{Location6}</h5>
                        <small>Delivered</small>
                    </div>
                </div>
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(new Date(TrackDate.setDate(TrackDate.getDate() + 2)))}</h5>
                        <small>7:18 am</small>
                    </div>
                    <div class="location">
                        <h5>{Location5}</h5>
                        <small>In transit</small>
                    </div>
                </div>
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(new Date(TrackDate.setDate(TrackDate.getDate() + 1)))}</h5>
                        <small>9:03 pm</small>
                    </div>
                    <div class="location">
                        <h5>{Location4}</h5>
                        <small>International Clearance</small>
                    </div>
                </div>
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(new Date(TrackDate.setDate(TrackDate.getDate() + 1)))}</h5>
                        <small>8:14 am</small>
                    </div>
                    <div class="location">
                        <h5>{Location3}</h5>
                        <small>In transit</small>
                    </div>
                </div>
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(new Date(TrackDate.setDate(TrackDate.getDate() + 1)))}</h5>
                        <small>12:17 am</small>
                    </div>
                    <div class="location">
                        <h5>{Location2}</h5>
                        <small>In transit</small>
                    </div>
                </div>
                <div class="item">
                    <div class="time">
                        <h5>{formatDate(TrackDate)}</h5>
                        <small>4:30 pm</small>
                    </div>
                    <div class="location">
                        <h5>{Location1}</h5>
                        <small>Pickup Scan</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
