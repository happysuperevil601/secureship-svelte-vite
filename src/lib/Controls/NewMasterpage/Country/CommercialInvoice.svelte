<script>
  export let TypeOfCI = '';
  export let Address = '';
  export let Phone = '';
  export let CarrierTracking_No = '';
  export let GeneralDescription = '';
  export let InvoiceNumber = '';
  export let CustomsBroker = '';
  export let InvDate = '';
  export let Qty = '';
  export let Description = '';
  export let HTSCode = '';
  export let CountryOfOrigin = '';
  export let Price = '';
  export let Qty2 = '';
  export let Description2 = '';
  export let HTSCode2 = '';
  export let CountryOfOrigin2 = '';
  export let Price2 = '';
  export let TermsofSale = '';
  export let TotalNoPackages = '';
  export let ReasonForExport = '';
  export let ContactName = '';
  export let TotalInvoiceAmount = '';
  export let TotalWeight = '';
</script>

<style lang="scss">

</style>

<section class="commercial-invoice">
    <h4>Sample Commercial Invoice for {TypeOfCI}</h4>
    <table class="shipinvoice">
        <tr>
            <th>Ship To</th>
            <th>Invoice</th>
        </tr>
        <tr>
            <td>
                {Address}<br/>
                <br/>
                <b>Phone: </b>{Phone}
            </td>
            <td>
                <b>Carrier tracking number:</b> {CarrierTracking_No}
                <br/>
                <b>General Description:</b>
                <br/>
                <span class="highlight">
                    {GeneralDescription}
                </span>
                <br/>
                <br/>
                <b>Invoice number:</b> {InvoiceNumber}<br/>
                <b>Customs Broker:</b> {CustomsBroker}<br/>
                <b>Date:</b> {InvDate}
            </td>
        </tr>
    </table>
    <table class="line-items">
        <tr>
            <th>QTY</th>
            <th>Description of Goods</th>
            <th>C/O</th>
            <th>SubTotal</th>
        </tr>
        <tr>
            <td>{Qty}</td>
            <td>
                <span class="highlight">{Description}</span>
                <br/>
                <br/>
                {#if HTSCode}
                    <b>HTS Code:</b> {HTSCode}
                {/if}
            </td>
            <td>{CountryOfOrigin}</td>
            <td>{Price}</td>
        </tr>
        <tr id="lineItem2" visible={Qty2 !== null && Qty2 !== undefined && Qty2 !== ''}>
            <td>{Qty2}</td>
            <td>
                <span class="highlight">{Description2}</span>
                <br/>
                <br/>
                {#if HTSCode2}
                    <b>HTS Code:</b> {HTSCode2}
                {/if}
            </td>
            <td>{CountryOfOrigin2}</td>
            <td>{Price2}</td>
        </tr>
    </table>

    <table class="ci-misc">
        <tr>
            <td>
                <b>Terms of Sale:</b> {TermsofSale}
                <br/>
                <b>Total number of packages:</b> {TotalNoPackages}
                <br/>
                <b>Reason for export:</b> <span class="highlight">{ReasonForExport}</span>
                <br/>
                <b>Contact Name:</b> {ContactName}
                <br/>
            </td>
            <td>
                <b>Total Invoice Amount:</b> {TotalInvoiceAmount}
                <br/>
                <b>Total Weight:</b> {TotalWeight}
                <br/>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <b>Declaration Statement:</b> I hereby certify that information provided is true and complete to the
                best of my knowledge
            </td>
        </tr>
    </table>
</section>
