<script>
  export let CountryName = 'Country Name';
  export let ExtraRow1Col1 = 'Extra Row 1 Col 1';
  export let ExtraRow1Col2 = 'Extra Row 1 Col 2';
  export let ExtraRow1Col3 = 'Extra Row 1 Col 3';
  export let ExtraRow2Col1 = 'Extra Row 2 Col 1';
  export let ExtraRow2Col2 = 'Extra Row 2 Col 2';
  export let ExtraRow2Col3 = 'Extra Row 2 Col 3';
  export let ExtraRow3Col1 = 'Extra Row 3 Col 1';
  export let ExtraRow3Col2 = 'Extra Row 3 Col 2';
  export let ExtraRow3Col3 = 'Extra Row 3 Col 3';
  export let ExtraRow4Col1 = 'Extra Row 4 Col 1';
  export let ExtraRow4Col2 = 'Extra Row 4 Col 2';
  export let ExtraRow4Col3 = 'Extra Row 4 Col 3';
</script>

<style lang="scss">

</style>

<section id="required-docs" class="required-documents">
    <div>
        <i class="fas fa-file-alt"></i>
        <h2>Required Documents</h2>
    </div>
    <p>
        <br/>Shipping packages internationally requires a lot of documentation. This process alone can be confusing and
        time-consuming.
        So we've narrowed down what documents you might need and ranked them based on likeliness of being needed.
    </p>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th style="width: 25%">Document Type
                </th>
                <th style="width: 25%">When?
                </th>
                <th>Details
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Shipping Label / Bill of Lading</td>
                <td><i class="fas fa-check"></i> Always required</td>
                <td>This is a label provided by the carrier (UPS, FedEx, DHL, etc.). Always required because the carrier
                    needs to know the parcel's destination.
                </td>
            </tr>
            <tr>
                <td>Commercial Invoice
                </td>
                <td><i class="fas fa-check"></i> Required for all non-document shipments<br>
                </td>
                <td>For all non-document shipments, you will require 3 copies of the commercial invoice (to be included
                    with your shipping labels).
                    These are for customs purposes and need to be included inside a document pouch outside of the
                    box.<br/>
                    <br/>
                    <p>When creating a shipment through the Secureship website, the system will help you create this
                        document automatically.</p>
                </td>
            </tr>
            <tr>
                <td>B13a
                </td>
                <td>Required if value exceeds $2,000 per shipment or is a controlled good<br>
                </td>
                <td>A B13a is required if your shipment exceeds $2000 CAD or is a controlled good<br>
                    and is destined to a country other than the US, Puerto Rico, or the US Virgin Islands
                    <br/>
                    <br>
                    <a target="_blank"
                       title="Regulatory information regarding the B13a for shipments to {CountryName}"
                       href="/learningcenter/shipping-206-common-international-shipping-documents#canadian-export-declaration-b13a"
                       rel="noopener">Learn more about the B13a form here.</a>
                </td>
            </tr>
            <tr>
                <td>Certificate of Origin (COO)</td>
                <td>Infrequently required<br/>
                    <br/>
                    Allows a reduced or zero-rated import duty.
                </td>
                <td>Canada has a preferential trade agreement with {CountryName}. A COO proves that an item has been
                    produced, manufactured or processed in Canada.<br/>
                    <br/>
                    When an item with a COO is imported into {CountryName}, it will incur a reduced or zero-rated import
                    duty.
                </td>
            </tr>
            <tr>
                <td>Certificate of Insurance (COI)</td>
                <td>Infrequently required<br/>
                    <br/>
                    Shows that the shipment has been insured.
                </td>
                <td>Banks may request a certificate of insurance when providing letters of credit for the goods.
                    Otherwise,
                    it is generally your choice whether to purchase insurance for the shipment.
                </td>
            </tr>
            <tr>
                <td>ATA Carnet</td>
                <td>Infrequently required<br/>
                    <br/>
                    Used to avoid duties and taxes on shipments of temporary nature.
                </td>
                <td>If you ship goods of temporary nature to and from a country, you can obtain an ATA Carnet to
                    expedite the customs clearance process and
                    ensure that anything of temporary nature is not charged duties and taxes.<br/>
                    <br/>
                    See <a href="#temporary-imports" title="Information on temporary imports to {CountryName}">Temporary
                        import section</a>
                </td>
            </tr>
            <tr id="extraRow1" runat="server">
                <td>{ExtraRow1Col1}</td>
                <td>{ExtraRow1Col2}</td>
                <td>{ExtraRow1Col3}</td>
            </tr>
            <tr id="extraRow2" runat="server">
                <td>{ExtraRow2Col1}</td>
                <td>{ExtraRow2Col2}</td>
                <td>{ExtraRow2Col3}</td>
            </tr>
            <tr id="extraRow3" runat="server">
                <td>{ExtraRow3Col1}</td>
                <td>{ExtraRow3Col2}</td>
                <td>{ExtraRow3Col3}</td>
            </tr>
            <tr id="extraRow4" runat="server">
                <td>{ExtraRow4Col1}</td>
                <td>{ExtraRow4Col2}</td>
                <td>{ExtraRow4Col3}</td>
            </tr>
            </tbody>
        </table>
    </div>
</section>
