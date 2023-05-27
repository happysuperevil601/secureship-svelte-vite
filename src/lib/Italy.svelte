<script lang="ts">
  import Banner from "./Controls/NewMasterpage/Banner.svelte"
  import UserRating from "./Controls/NewMasterpage/UserRating.svelte"
  import FloatingMenu from "./Controls/NewMasterpage/Country/FloatingMenu.svelte"
  import BreadCrumbs from "./Controls/NewMasterpage/Country/BreadCrumbs.svelte"
  import Overview from "./Controls/NewMasterpage/Country/Overview.svelte"
  import ShippingRates from "./Controls/NewMasterpage/Country/ShippingRates.svelte"
  import TrackingInformation from "./Controls/NewMasterpage/Country/TrackingInformation.svelte"
  import Disclaimer from "./Controls/NewMasterpage/Country/Disclaimer.svelte"
  import TypesOfShipmentsTable from "./Controls/NewMasterpage/Country/TypesOfShipmentsTable.svelte"
  import RequiredDocs from "./Controls/NewMasterpage/Country/RequiredDocs.svelte"
  import Insurance from "./Controls/NewMasterpage/Country/Insurance.svelte"
  import CommercialInvoice from "./Controls/NewMasterpage/Country/CommercialInvoice.svelte"
  import TemporaryImportChecklist from "./Controls/NewMasterpage/Country/TemporaryImportChecklist.svelte"
  import LazyLoad from "./Controls/NewMasterpage/LazyLoad.svelte"
</script>

<style lang="scss">

</style>

<div class="content">
  <Banner H1Text={`Shipping From Canada to Italy.`}
                  H2Text="Guide to easy and cheap shipping to Italy<br>Customs, Documents, Restrictions, Duties, Tracking, and more."
                  BackgroundImageUrl="https://test.secureship.ca/images/country-pages/shipping-to-italy-from-canada.jpg"
                  MobileBackgroundImageUrl="https://test.secureship.ca/images/country-pages/shipping-to-italy-from-canada.jpg"
                  ButtonText="Get Rates and Transit Time"
                  ButtonTitle="Get an Estimate for a shipment to Italy from Canada"
                  ButtonUrl="/webship/rates/getestimate.aspx#canada-to-italy"
                  runat="server" />

  <UserRating runat="server" />
  <FloatingMenu CountryName="Italy" runat="server" />


  <!--Main content-->
  <main>
    <BreadCrumbs CountryName="Italy" CountryNameAlternative="Italy" runat="server" />
    <Overview OverviewTitle="Guide to Sending Parcels to Italy"
                      Paragraph1="<p>Italy, known for its high fashion and inimitable style, refined cuisine, and fast motor cars is also one of Europe's major industrial and economic powers.</p>"
                      Paragraph2="<p>Italians love to shop, and they have readily taken to the internet to buy abroad to the tune of $15.8 billion USD in 2019. And it is expected to grow at 10% per year for the next several years.</p><p>Say, Buon giorno, to doing business in Italy!</p>"
                      Paragraph3="<p>Information on this page came from <a href='https://www.adm.gov.it/portale/-/faq-dogane-accise#esp' title='Agenzia delle dogane e dei Monopoli' target='_blank' rel='noopener'>Italian Customs</a> and <a href='https://www.Italy.be/en' title='Taxation and Customs Union' target='_blank' rel='noopener'>European Union</a> sources</p>"
                      runat="server" />
    <ShippingRates CountryName="Italy" CountryNameAlternative="Italy"
                           H2Tag="Shipping Rates"
                           Description="Secureship provides safe and affordable shipping from Canada to Italy. Whether you are an everyday shopper or a business,
            you can easily save up to 50% on your international shipping costs by way of accessing our group buying power."
                           runat="server" />

    <TrackingInformation CountryName="Italy" Location1="Ottawa, ON, CA" Location2="Toronto, ON, CA" Location3="FLORENCE, FL, IT"
                                 Location4="VENICE, VE, IT" Location5="ROME, RO, IT" Location6="MILAN, MI, IT" runat="server" />

    <Disclaimer CountryName="Italy" runat="server" />



    <section id="types-of-shipments" class="types-of-shipments">
      <TypesOfShipmentsTable CountryName="Italy" runat="server" />
      <br />

      <br />
      <div id="documents-only" class="subsection">
        <LazyLoad ClassName="header-img" Width="70" ImageUrl="/images/country-pages/documents-only.png"
                          Alt="Shipping Documents Only Image to Italy"
                          Title="Shipping Documents Only Image to Italy" runat="server" />


        <h3>Documents Only</h3>
        <p>Shipping documents to Italy can be done duty and tax free providing they have no commercial value.</p>
        <p>Some typical examples of shipped documents include:</p>
        <ul class="check-mark-list">
          <li>Bids or proposals for work or contracts</li>
          <li>Company newsletters with no commercial value used for internal communication</li>
          <li>Diplomas</li>
          <li>Driver's Licences</li>
          <li>Examination Papers</li>
          <li>Visa Applications</li>
        </ul>

        <p>Some items have limitations or criteria in order to be considered documents. They are shown in the table below.</p>
        <table class="general-table">
          <thead>
          <tr>
            <th>Document Type</th>
            <th>Restriction</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Airline tickets</td>
            <td>Must be validated</td>
          </tr>
          <tr>
            <td>Annual reports</td>
            <td>For shareholders or intercompany use only</td>
          </tr>
          <tr>
            <td>Blueprints</td>
            <td>Must have no commercial value and are for intercompany use or as a bid invitation (for example, architectural plans for an EU contract)</td>
          </tr>
          <tr>
            <td>Brochures</td>
            <td>Must be for intercompany use or for non-commercial purposes</td>
          </tr>
          <tr>
            <td>Business cards</td>
            <td>A maximum of 15 business cards allowed</td>
          </tr>
          <tr>
            <td>Cheques</td>
            <td>Only personalised cheques allowed</td>
          </tr>
          <tr>
            <td>Credit cards</td>
            <td>Must be personalised
            </td>
          </tr>
          <tr>
            <td>Event tickets</td>
            <td>
              <p>Tickets for football (soccer) matches, concerts, or stage performances may be sent, but to a maximum of 20 kg per shipment</p>
              <p>Tickets shipped from a printing company to ticket sales office or an organiser of an event may not be sent as documents</p>
            </td>
          </tr>
          <tr>
            <td>Examination Papers</td>
            <td>Considered a document if shipped in an express envelope or letter pack
            </td>
          </tr>
          <tr>
            <td>Greeting Cards and Invitations</td>
            <td>
              <p>Only considered documents if personalised</p>
              <p>Non-personalised invitations and greeting cards require an invoice</p>
            </td>
          </tr>
          <tr>
            <td>Manuals (Technical)</td>
            <td>Only the appropriate number of manuals is allowed
            </td>
          </tr>
          <tr>
            <td>Intercompany Data on CD-Rom/Disc </td>
            <td>CD-ROMs and discs with invoices must be declared
              VAT may apply if the value exceeds &#8364;22 (about $33 CDN)
            </td>
          </tr>
          <tr>
            <td>Negatives</td>
            <td>
              <p>Only negatives, slides or print films being sent to a press or publishing agency are allowed</p>
              <p>If the items have had value added through press or editorial charges, they then require an invoice</p>
            </td>
          </tr>
          <tr>
            <td>Newsletters</td>
            <td>Considered documents if they are intercompany shipments for intercompany use
              Note: Shipments from a publisher or printing company are non-documents
            </td>
          </tr>
          <tr>
            <td>Newspapers</td>
            <td>Must be for non-commercial purposes</td>
          </tr>
          <tr>
            <td>Stationery</td>
            <td>Must be personalised and an appropriate amount for non-commercial use</td>
          </tr>
          <tr>
            <td>Traveller's Cheques</td>
            <td>Only allowed if personalised</td>
          </tr>

          </tbody>
        </table>


        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://www.ups.com/ga/CountryRegs?loc=en_CA"
             title="Import/Export Country Regulations: UPS - Canada in Italy"
             target="_blank" rel="noopener">https://www.ups.com/ga/CountryRegs?loc=en_CA</a>
        </p>
      </div>





      <div id="gifts" class="subsection">
        <LazyLoad ClassName="header-img" Width="90" ImageUrl="/images/country-pages/shipping-gifts.png"
                          Alt="Shipping Gifts to Italy"
                          Title="Shipping Gifts to Italy" runat="server" />

        <h3>Shipping Gifts</h3>
        <p>
          Shipping a gift from Canada to someone living in Italy can be done duty and tax free if the value of the gift (excluding shipping and insurance costs) is less than &#8364;45 (about $67 CDN).
        </p>
        <p>Gifts of alcoholic drinks, eau de toilette and perfumes, and tobacco and tobacco products will incur excise taxes.</p>

        <h4>Shipments from Individual-to-Individual</h4>

        <p>Shipping a gift from an individual in Canada to an individual in Italy will be duty-free under the following conditions:</p>

        <ul class="check-mark-list">
          <li>The words "Gift Shipment" or "Unsolicited Gift"  are included on the commercial invoice (<a href="#commercial-invoice-gift"
                                                                                                          title="Sample commercial invoice showing how to ship unsolicited gifts to Italy"
                                                                                                          class="smoothScroll">see sample</a>)</li>
          <li>The gift has been sent without any expectation of payment</li>
          <li>The gift is intended for family or personal use</li>
          <li>The gift is of an occasional nature, not a regular event</li>
          <li>The shipment has a value of less than &#8364;45 (about $67 CDN)</li>
        </ul>
        <p>For a shipment valued between &#8364;45 and &#8364;700 (about $1045 CDN), a duty of 2.5% will be charged on the value of the goods. And VAT will be applied at the rate of 22%.</p>
        <p>
          <span class="emphasis">NOTE:</span> Tobacco products are not eligible for the 2.5% flat-rate duty. They will incur an excise tax.
        </p>

        <h4>Shipments from Business-to-business</h4>
        <p>Shipments from a business in Canada to one in Italy will incur a VAT charge when it enters Italy. </p>
        <h4>Shipments From a Business-to-Individual</h4>
        <p>No information regarding gifts shipped from a business to an individual is available at this time.</p>

        <section id="commercial-invoice-gift">
          <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                     GeneralDescription="Personal Shipment / Gift Shipment" Qty="1 Each" Description="Gift Shipment: LEGO Star Wars Rebel UWing Fighter, 659 piece set"
                                     HTSCode="" CountryOfOrigin="CA" Price="$79.99" TotalInvoiceAmount="$79.99" TypeOfCI="Gifts" runat="server" />
        </section>

        <br />
        <br />
        <h3 id="multiplegifts">Sending Multiple Gifts to Italy</h3>
        <p>Be sure to:</p>
        <ul class="check-mark-list">
          <li>Words "Unsolicited Gift: Consolidated Gift Package" appear in General Description of Goods as well as the Detailed description of goods
            (<a href="#commercial-invoice-multiple-gifts" title="Commercial Invoice for Shipping Gifts to Italy" class="smoothScroll">see sample</a>)
          </li>
          <li>Individually wrap and tag each gift separately</li>
          <li>Ensure the names on each tag are different and clearly marked on the commercial invoice</li>
        </ul>

        <section id="commercial-invoice-multiple-gifts">
          <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                     GeneralDescription="Unsolicited Gift: Consolidated Gift Package" Qty="1 Each" Description="Gift - Roger: LEGO Star Wars Rebel UWing Fighter, 659 piece set"
                                     HTSCode="" CountryOfOrigin="CA" Price="$39.99"
                                     Qty2="1 Each" Description2="Gift - Erica: Handwoven French Canadian Catalogne Blanket"
                                     HTSCode2="" CountryOfOrigin2="CA" Price2="$49.99"
                                     TotalInvoiceAmount="$89.98" TypeOfCI="Gifts" runat="server" />
        </section>





        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://europa.eu/youreurope/business/taxation/vat/cross-border-vat/index_it.htm#outsidetheeubuygoods"
             title="Aliquote IVA transfrontaliere in Europa - La tua Europa in Italy"
             target="_blank" rel="noopener">https://europa.eu/youreurope/business/taxation/vat/cross-border-vat/index_it.htm#outsidetheeubuygoods</a>
          <br />
          <a href="https://www.adm.gov.it/portale/-/faq-dogane-accise#esp"
             title="Agenzia delle dogane e dei Monopoli in Italy"
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/-/faq-dogane-accise#esp</a>
          <br />
        </p>


      </div>
      <br />
      <div id="personal-belongings" class="subsection">
        <LazyLoad ClassName="header-img" Width="90" ImageUrl="/images/country-pages/shipping-personal-effects.png"
                          Alt="Shipping personal effects/belongings to Italy"
                          Title="Shipping personal effects/belongings to Italy" runat="server" />

        <h3>Shipping Personal Effects</h3>
        <p>
          Personal effects can be shipped to Italy from Canada duty-free under the following conditions:
        </p>

        <ul>
          <li>You have lived outside of Italy for at least 12 consecutive months</li>
          <li>Your personal effects have been in use by you for at least 6 months</li>
          <li>Household goods are to arrive within 6 months of you establishing your residence in Italy</li>
        </ul>

        <h4>Do Not Ship</h4>
        <p>Ensure that none of the following is in your shipment:</p>

        <ul class="x-mark-list">
          <li>Tobacco, cigarettes and cigars</li>
          <li>Wine and spirits</li>
          <li>Food</li>
          <li>Animal skins</li>
          <li>Medicines and drugs</li>
          <li>Cordless electronics, including walkie-talkies</li>
        </ul>


        <br />

        <h4>Moving Temporarily</h4>
        <h5><u>Students</u></h5>

        <p>
          If you are moving to Italy to study at a university, you can ship your personal effects duty and tax free. Your shipment may include new goods.
          You must also include a confirmation from the university stating that you are enrolled to study there.
        </p>
        <p><span class="emphasis">NOTE:</span> Medications CANNOT be shipped within the parcel. You must carry them into the country on you.</p>

        <h5><u>Non-Students</u></h5>
        <p>No information is currently available at this time.</p>

        <h4>Moving Permanently</h4>
        <p>Italian citizens returning to live in Italy may ship personal effects duty-free providing:</p>
        <ul>
          <li>The household goods are for personal use only</li>
          <li>Have been owned for at least 6 months</li>
          <li>The items arrive in Italy within 12 months that the person has declared residence in Canada</li>
        </ul>

        <br />
        <h5>Personal Effects Checklist</h5>
        <ul class="check-mark-list">
          <li>Copy of passport</li>
          <li>Original bill of lading (OBL) / air waybill (AWB)</li>
          <li>Packing list in English or Italian - Be sure to completely describe any artwork and antiques</li>
          <li>Customs <a href="http://www.gdf.gov.it/servizi-per-il-cittadino/modulistica/autocertificazione/dichiarazione-sostitutiva-di-certificazione.pdf" title="DICHIARAZIONE SOSTITUTIVA DI CERTIFICAZIONE" target="_blank" rel="noopener">Dichiarazione Sostitutiva di Certificazione</a>, completed and signed by owner of the goods</li>
          <li>Permit to stay released by the Questura Police Office (non-diplomats)</li>
          <li>Copy of residence certificate or receipt from the Italian City Hall of the city you are going to live in</li>
          <li>Any above listed items or conditions are met</li>
        </ul>


        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://www.adm.gov.it/portale/-/faq-dogane-accise#esp"
             title="Agenzia delle dogane e dei Monopoli in Italy"
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/-/faq-dogane-accise#esp</a>
          <br />
          <a href="https://www.ups.com/ga/CountryRegs?loc=en_US"
             title="Import and Export Regulations | UPS - Italy"
             target="_blank" rel="noopener">https://www.ups.com/ga/CountryRegs?loc=en_US</a>
          <br />
          <a href="https://www.esteri.it/mae/en/servizi/italiani-all-estero/assistenzacittadiniestero/rimpatri.html"
             title="Rimpatrio consolare in Italy"
             target="_blank" rel="noopener">https://www.esteri.it/mae/en/servizi/italiani-all-estero/assistenzacittadiniestero/rimpatri.html
            <br />
            <a href="https://www.poste.it/faq-spedizioni-e-consegne.html"
               title="Rimpatrio consolare in Italy"
               target="_blank" rel="noopener">https://www.poste.it/faq-spedizioni-e-consegne.html</a>
          </a>
        </p>
        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Personal effects being delivered to my new address." Qty="5 Pairs"
                                   Description="Personal Effects: 5 pairs of various types of shoes"
                                   HTSCode="" CountryOfOrigin="IN" Price="$40.00" TotalInvoiceAmount="$678.00" TypeOfCI="Personal Effects" runat="server"
                                   Qty2="1 Each" Description2="Personal Effects: Arc'terix Winter Jacket"
                                   HTSCode2="" CountryOfOrigin2="CA" Price2="$478.00" />
      </div>


      <div id="food-chocolate-candies" class="subsection">
        <LazyLoad ClassName="header-img" Width="70" ImageUrl="/images/country-pages/food-chocolate-candies.png"
                          Alt="Shipping Food, Chocolate, Candies to Italy"
                          Title="Shipping Food, Chocolate, Candies to Italy" runat="server" />
        <h3>Food, Chocolate, Candies</h3>

        <p>Foodstuffs up to a value of &#8364;45 (about $67 CDN) can be shipped to Italy duty and tax free.</p>


        <h4>You May Ship</h4>
        <ul class="check-mark-list">
          <li>Caviar, up to a maximum of 125 g</li>
          <li>No more than 2 kg of powdered milk for babies, food for children and food required for medical reasons (These items must be shelf-stable, commercially produced and unopened)</li>
          <li>Fish, providing it is gutted and not more than 20 kg</li>
          <li>Bread and biscuits</li>
          <li>Chocolate and candies</li>
          <li>Pasta and noodles, providing they are not mixed with meat</li>
          <li>Salmon eggs as part of tinned pat&#233; not exceeding 20 kg</li>
          <li>Small quantities of fresh or dried fruits and vegetables</li>
        </ul>

        <p>*These conditions apply: The foods are a commercial, shelf-stable product in an unopened container labelled with a registered trademark.</p>


        <h4>Do Not Ship</h4>
        <ul class="x-mark-list">
          <li>Meat and products containing meat</li>
          <li>Milk and dairy products and foods prepared with either of these</li>
        </ul>

        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e"
             title="Traveller's customs in Italy"
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e</a>

        </p>
        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Food Shipment - Assorted chocolate bars in their original manufacturer's packaging"
                                   Qty="1 Box" Description="Nestle Chocolate Bars in original packaging expiring May 2021 (shelf life of 6 months or longer)"
                                   HTSCode="" CountryOfOrigin="CA" Price="$20.00" TotalInvoiceAmount="$20.00"
                                   TypeOfCI="Food, Chocolate, Candies" ReasonForExport="Permanent / Sold" runat="server" />

      </div>

      <div id="commercial-samples" class="subsection">
        <LazyLoad ClassName="header-img" Width="70" ImageUrl="/images/country-pages/shipping-samples.png"
                          Alt="Shipping Promotional Material to Italy"
                          Title="Shipping Promotional Material to Italy" runat="server" />

        <h3>Samples</h3>
        <p>
          Samples with no commercial value, i.e. they are not for sale, may be shipped to Italy duty and tax free if their only purpose is to demonstrate a product.
        </p>



        <p>
          Product samples with commercial value may be shipped to Italy, but a security must be paid.
          The amount required is the value of the duties and taxes plus 10% (this could be in the form of cash or a bond).
        </p>

        <h5>Commercial Sample Checklist</h5>
        <ul class="check-mark-list">
          <li>Stay in Italy for no more than 1 year.</li>
          <li>Write 'no a la vente' (Not for Sale) on the merchandise</li>
          <li>The samples are to be rendered unusable by one of the following methods: perforated, cut, or marked with indelible ink</li>
          <li>The number of samples shipped is reasonable for the purpose</li>
          <li>Have a certificate of origin.</li>
          <li>Arrive with a descriptive list of each sample (weight and value), preferably in Italian.</li>
          <li>Are accompanied with a statement that declares the samples are intended for demonstration purposes only and will be returned to Canada without being sold. (This document must be notarised by an Italian consulate.)</li>
          <li>Are not to be sold, used for monetary gain, or utilized except as part of a demonstration.</li>
        </ul>
        <br />
        <p>
          <b class="emphasis">NOTE</b> Samples with a value of greater than &#8364;2,582 (about $3,850 CDN) require the services of an Italian freight forwarder.
        </p>



        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://import-export.societegenerale.fr/en/country/italy/regulations-customs"
             title="Regulations and customs in Italy : Customs"
             target="_blank" rel="noopener">https://import-export.societegenerale.fr/en/country/italy/regulations-customs</a>
          <br />
          <a href="https://it.usembassy.gov/wp-content/uploads/sites/67/2016/10/Italy-2016-CCG.pdf"
             title="Doing Business in Italy"
             target="_blank" rel="noopener">https://it.usembassy.gov/wp-content/uploads/sites/67/2016/10/Italy-2016-CCG.pdf</a>
          <br />
          <a href="https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT"
             title="EUR-Lex - 32015R2446 - EUR-Lex in Italy"
             target="_blank" rel="noopener">https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT</a>
        </p>

        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Commercial Sample - Not for Resale" Qty="1 Box" Description="Commercial Sample - Advanced reading copy of Dan Brown's novel."
                                   HTSCode="" CountryOfOrigin="CA" Price="$20.00" TotalInvoiceAmount="$20.00" TypeOfCI="Commercial Sample" runat="server" />
      </div>



      <div id="marketing-material" class="subsection">
        <LazyLoad ClassName="header-img" Width="50" ImageUrl="/images/country-pages/promotional-material.png"
                          Alt="Sending Promotional material to Italy"
                          Title="Sending Promotional material to Italy" runat="server" />

        <h3>Advertising Material</h3>
        <p>
          Advertising and promotional materials can be sent to Italy from Canada exempt from duties and taxes providing the material itself is not sold.
        </p>
        <p>Advertising items include:</p>
        <ul>
          <li>Catalogues</li>
          <li>Price lists</li>
          <li>Advertising posters</li>
          <li>Calendars</li>
          <li>Photographs</li>
          <li>Films</li>
        </ul>

        <h5>Advertising Material Checklist</h5>
        <ul class="check-mark-list">
          <li>A commercial invoice must be included with your shipment</li>
          <li>Write 'Promotional Material - Not for Resale' on the commercial invoice in the general description of goods</li>
        </ul>



        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://import-export.societegenerale.fr/en/country/italy/regulations-customs"
             title="Regulations and customs in Italy : Customs"
             target="_blank" rel="noopener">https://import-export.societegenerale.fr/en/country/italy/regulations-customs</a>
          <br />
          <a href="https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT"
             title="EUR-Lex - 32015R2446 - EUR-Lex"
             target="_blank" rel="noopener">https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT</a>
          <br />
        </p>







        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Promotional Material - Not for Resale" Qty="1 Each" Description="Promotional Material: Not for Resale. Product pamphlets to hand out at trade show."
                                   HTSCode="" CountryOfOrigin="CA" Price="$163.00" TotalInvoiceAmount="$163.00" TypeOfCI="Promotional Material" runat="server" />
      </div>
      <br />

      <div id="warranty-repair" class="subsection">
        <LazyLoad ClassName="header-img" Width="50" ImageUrl="/images/country-pages/repairs.png"
                          Alt="Have your goods warranty repaired in Italy"
                          Title="Have your goods warranty repaired in Italy" runat="server" />
        <h3>Repairs</h3>
        <p>Shipping products to Italy for repair is a fairly straightforward process and is exempt from duties and taxes under the inward processing rules of the European Union.</p>
        <p>Inward processing means goods from outside the EU brought into the EU to have work done on them, such as repairs.</p>
        <h4>Items Under Warranty</h4>
        <p>As Italy and Canada have a free-trade agreement (CETA), repairs under warranty returning to Canada from Italy are duty-free and will not be charged GST.</p>
        <h4>Items No Longer Under Warranty</h4>
        <p>Equipment repaired in Italy and returning to Canada will be charged GST on the value of the repair and on any new parts required to complete the repair.</p>
        <h4>Sending Product for Repair to Italy</h4>
        <p>When sending equipment for repair to Italy, include the following information on the shipment:</p>

        <ul>
          <li>Write 'REPAIR & RETURN' on the commercial invoice under General Description or Remarks</li>
          <li>Indicate the Serial/Product number under the Detailed Description of Goods section on the commercial invoice</li>
          <li>Include a copy of the Repair Contract with all your export documentation</li>
        </ul>

        <h4>Returning Product After Repairs are Completed</h4>

        <p>If your product has been repaired in Canada and is being returned to Italy, ensure to do the following:</p>
        <ul>
          <li>Write 'REPAIR & RETURN' on the commercial invoice in the General Description or Remarks section</li>
          <li>Indicate the value of the product <b class="emphasis">INCLUDING</b> the cost of the repair under the Detailed Description of Goods section</li>
          <li>Include the original shipping documents or tracking number from when the item was first exported to Italy</li>
        </ul>

        <p>Be sure to write the necessary information on the commercial invoice according to the document checklist below. </p>

        <h5>Repair Checklist</h5>
        <ul class="check-mark-list">
          <li>Commercial Invoice must clearly state 'REPAIR & RETURN' under the General Description or Remarks, and include the estimated time of return</li>
          <li>Include repair contract with shipment</li>
          <li>Serial or product number and the cost of repairs should be indicated under the Detailed Description of Goods section</li>
        </ul>


        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://www.adm.gov.it/portale/-/faq-dogane-accise#perf_att"
             title="Agenzia delle dogane e dei Monopoli - Faq: le risposte alle domande in Italy "
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/-/faq-dogane-accise#perf_att</a>
          <br />
          <a href="https://ec.europa.eu/taxation_customs/inward-processing_en"
             title="Inward processing | Taxation and Customs Union in Italy"
             target="_blank" rel="noopener">https://ec.europa.eu/taxation_customs/inward-processing_en</a>
          <br />
          <a href="https://www.cbsa-asfc.gc.ca/publications/dm-md/d8/d8-2-10-eng.html"
             title="Memorandum D8-2-10 - Goods Returning to Canada Having Been Repaired Outside of Canada in Italy "
             target="_blank" rel="noopener">https://www.cbsa-asfc.gc.ca/publications/dm-md/d8/d8-2-10-eng.html</a>
          <br />
          <a href="https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT"
             title="EUR-Lex - 32015R2446 - EUR-Lex in Italy "
             target="_blank" rel="noopener">https://eur-lex.europa.eu/legal-content/EN-IT/TXT/?uri=CELEX:32015R2446&from=IT</a>
        </p>

        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Repair and Return - Watch being sent for repair" Qty="1 Each"
                                   Description="Fossil Watch being sent for repair - Model E5, serial # 789456FG7E2 - Repair Cost $76.00"
                                   HTSCode="" CountryOfOrigin="US" Price="$163.00" TotalInvoiceAmount="$163.00" TypeOfCI="Warranty Repair" runat="server" />
      </div>



        <LazyLoad ClassName="header-img" Width="70" ImageUrl="/images/country-pages/temporary-imports.png"
                          Alt="Temporary Imports / Exports for shipments to Italy"
                          Title="Temporary Imports / Exports for shipments to Italy" runat="server" />
        <h3>Temporary Imports</h3>
        <p>
          Goods shipped to Italy that will be returned to Canada are called temporary imports and qualify for entry without payment of duties or taxes.
        </p>
        <p>
          Temporary imports will be allowed to stay in Italy up to 24 months, but for some products the time limit will be less.
        </p>
        <p>Goods that are often part of a temporary import include:</p>
        <ul class="">
          <li>Materials and goods to be used for entertainment or during a public exhibition such as a trade show booth</li>
          <li>Items that will be used or displayed at a fair, exhibition or event</li>
          <li>Commercial samples</li>
          <li>Scientificand professional equipment</li>
          <li>Equipment required to evaluate and test the operation of other goods and equipment</li>
          <li>Tools and specialised equipment required for repairing, exploring, producing or manufacturing</li>
        </ul>
        <br />
        <p>Temporary admissions are expected to follow the rules below:</p>
        <ul class="check-mark-list">
          <li>The goods will be returned to Canada unchanged aside from normal wear-and-tear</li>
          <li>If they remain in Italy, then duties and VAT must be paid</li>
        </ul>




        <h4>Qualifying for Duty & Tax Free Temporary Import</h4>
        <p>In order to import your goods duty and tax free into Italy, you can pick from 1 of the 2 Temporary Import Methods listed below.</p>
        <p>
          Each option has its pros and cons. Regardless, each of the following methods requires you to complete a Commercial Invoice (CI). More details
          <a href="#temporary-import-ci-only" class="smoothScroll"
             title="Temporary imports CI in Italy"
             rel="noopener">below</a>.
        </p>

        <br />
        <table class="general-table" id="Temporary-imports-more-info">
          <tr>
            <th>Option #
            </th>
            <th>Temporary Import Method
            </th>
            <th>Risk of paying Duties and taxes
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>Commercial Invoice Only
              <br />
              +<br />
              A Unique Way to Identify the Goods (This may be done with trademarks, serial numbers, registration numbers or photographs)</td>
            <td>High - <span class="note">if broker cannot clear goods temporarily</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Commercial Invoice
              <br />
              +<br />
              ATA Carnet
              <br />
              +<br />
              A Unique Way to Identify the Goods

            </td>
            <td>Very Low</td>
          </tr>
        </table>
        <br />
        <br />
        <div style="margin-left: 40px;">
          <div style="font-weight: 700">1. Complete a Commercial Invoice Only</div>
          <p>
            <br />
            This is the simplest and quickest option. <a href="#temporary-import-ci-only" class="smoothScroll"
                                                         title="See example of how to declare a Temporary import on your commercial invoice for your boxes or parcels to Italy">See example</a>.
          </p>
          <p><span class="emphasis">NOTE:</span> You should be aware that shipping using this method doesn't guarantee that your items will be imported duty/tax free. Not all brokers will clear goods as temporary imports (i.e. UPS, Fedex, DHL), nor is it a guarantee that customs won't charge any duties and taxes. </p>

          <br />
          <div style="font-weight: 700">
            2.  CI + an ATA Carnet
          </div>
          <p>
            This option is great for items that frequently travel in and out of the country. It's also great because once you have an ATA Carnet, it is accepted by 176 countries worldwide making the application process a one-time thing.
          </p>

          <p>
            In addition to declaring your commercial invoice as a temporary import, you can get an ATA Carnet for the items that are of temporary nature.
          </p>
          <p>
            ATA Carnets are beyond the scope of this article. You can however, contact your local chamber of commerce and they will be able to guide you along. You can also find more information here: <a href="http://www.chamber.ca/carnet/" title="ATA Carnet�. Canadian Chamber of Commerce in Italy" target="_blank" rel="noopener">http://www.chamber.ca/carnet/</a>
          </p>
        </div>
        <br />
        <p>In addition to the 2 options listed above, the following <b class="emphasis">conditions</b> must also be met in order to qualify for a duty and VAT free exemption:</p>


        <ul class="check-mark-list">
          <li>The goods arrive and leave in the same condition, allowing for normal wear and tear; maintenance and minor repairs are allowed under certain conditions</li>
          <li>Stay no longer than 24 months in Italy</li>
        </ul>
        <br />

        <p>
          <b class="emphasis">NOTE</b>:<br />
        <ul>
          <li>If the above conditions are not followed, duties and taxes will be charged as though the goods have been imported permanently</li>
          <li>Your Customs broker can clear goods of a temporary nature, however FedEx, UPS, DHL, etc. typically <b class="emphasis">cannot</b> clear goods of a temporary nature.</li>
        </ul>


        <br />
        <TemporaryImportChecklist CountryName="Italy" runat="server" />


        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://www.adm.gov.it/portale/-/ammissione-temporanea-1-ammissione-temporanea"
             title="Agenzia delle dogane e dei Monopoli in Italy"
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/-/ammissione-temporanea-1-ammissione-temporanea</a>

        </p>
        <div id="temporary-import-ci-only">&nbsp;</div>
        <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                   GeneralDescription="Temporary Imports - Trade show booth and display equipment returning Jan 2020" Qty="1 box"
                                   Description="Temporary Imports - Trade show booth and display equipment"
                                   HTSCode="" CountryOfOrigin="CA" Price="$1032.00" TotalInvoiceAmount="$1032.00" TypeOfCI="Temporary Imports" runat="server" />

        <br />
        <br />
        <br />

        <div id="permanent" class="subsection">
          <LazyLoad ClassName="header-img" Width="90" ImageUrl="/images/country-pages/permanent-goods.png"
                            Alt="Permanent Goods / Sold To an individual or business within Italy"
                            Title="Permanent Goods / Sold To an individual or business within Italy" runat="server" />

          <h3>Permanent/Sold Goods</h3>

          <h4>Occasional Shipper</h4>
          <p>If you ship occasionally to Italy (i.e. items you sold on eBay), there isn't too much you need to do. You will need to:</p>
          <ul class="check-mark-list">
            <li>Include 3 copies of the Commercial Invoice with your shipment</li>
            <li>Provide a detailed description of the goods on the Commercial Invoice (in order to avoid customs delays)</li>
          </ul>
          <br />
          <p>
            <b class="emphasis">NOTE</b><br />
            An Economic Operator Registration and Identification (EORI) number is NOT needed if you are shipping as a private individual.
          </p>

          <br />

          <h4>Regular Shipper</h4>
          <p>If you regularly sell and ship goods to Italy, we recommend you consult a licensed customs broker in Italy.</p>
          <p>
            You may need to comply with certain requirements, such as obtaining an
            <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/customs/eori/eori-number/assignment_of_eori_number/"
               title="Assignment of EORI number in Italy"
               target="_blank" rel="noopener">Economic Operator Registration and Identification (EORI)</a> number.
          </p>
          <p>Duties and taxes will have to be paid by the importer. These will be calculated on the value of the goods plus shipping and insurance costs. </p>
          <br />


          <p class="sources">
            <b>Sources:</b><br />
            <a href="https://www.adm.gov.it/portale/-/faq-dogane-accise#esp"
               title="Agenzia delle dogane e dei Monopoli in Italy"
               target="_blank" rel="noopener">https://www.adm.gov.it/portale/-/faq-dogane-accise#esp</a>
            <br />
            <a href="https://www.centroconsumatori.tn.it/139d977.html"
               title="Il dazio e le tasse per l'importazione dei prodotti extra UE - CRTCU in Italy"
               target="_blank" rel="noopener">https://www.centroconsumatori.tn.it/139d977.html</a>

          </p>
          <CommercialInvoice CountryName="Italy" Phone="+39 011 815 3611" Address="Amedeo Avogadro<br/>Corso S. Maurizio, 8<br />10124, Torino, TO<br/>Italy<br>"
                                     GeneralDescription="Permanent/Sold: Parts and accessories for Canon B78n camera" Qty="15 Each"
                                     Description="Camera Lenses: Canon EF 50mm, Canon EF 85mm & wide-angle lenses."
                                     HTSCode="" CountryOfOrigin="CA" Price="$132.00" TotalInvoiceAmount="$1980.00" TypeOfCI="Permanent/Sold Goods" ReasonForExport="Permanent/Sold" runat="server" />
        </div>
    </section>
    <RequiredDocs CountryName="Italy"
                          PackagingListWhen="Infrequently required"
                          PackagingListDetails="Required if value exceeds $2,000 per shipment or is a controlled good."
                          ExtraRow1Col1="Packing list"
                          ExtraRow1Col2="Infrequently required"
                          ExtraRow1Col3="<p>No specific form is required, but generally includes information regarding:</p><ul><li>The exporter, importer and transport company</li><li>Date of issue</li><li>Number of freight invoice</li><li>Type and number of packages</li><li>Contents of each package</li><li>Marks and numbers</li><li>Net weight, gross weight and measurements of each package</li></ul>"
                          runat="server" />



    <section id="prohibited" class="prohibited">
      <div>
        <i class="fas fa-ban"></i>
        <h2>Prohibited & Restricted Imports</h2>
      </div>
      <br />
      <p>
        Certain goods may be prohibited from entering Italy while others may enter with conditions (they are restricted).
        Prohibitions and restrictions are in place to protect public health and safety.
      </p>

      <h4>Prohibited Items</h4>
      <div class="prohibited-list">
        <ul class="grid-items prohibited">
          <li class="bg-blank"><i class="fas fa-drumstick-bite"></i>Meat and Products containing meat</li>
          <li class="bg-blank"><i class="fas fa-cheese"></i>Milk and Dairy products</li>
          <li class="bg-blank"><i class="fas fa-utensils"></i>Foods prepared with either Milk or Dairy</li>
          <li class="bg-blank"><i class="fas fa-crosshairs"></i>Weapons such as firearms, knives, and swords</li>
          <li class="bg-blank"><i class="far fa-registered"></i>Counterfeited goods and items that infringe on intellectual property rights</li>
          <li class="bg-blank"><i class="fas fa-syringe"></i>Drugs, psychotropic and doping substances</li>
          <li class="bg-blank"><i class="fas fa-smoking"></i>Tobacco and tobacco products (cannot be purchased from within Italy over the internet but are allowed to be carried in by travellers)</li>
        </ul>
      </div>

      <h4 id="restricted">Restricted Items</h4>
      <div class="restricted-list">
        <ul class="grid-items prohibited">
          <li class="bg-blank"><i class="fas fa-glass-martini-alt"></i>Alcohol and alcoholic beverages</li>
          <li class="bg-blank"><i class="fas fa-fish"></i>Caviar (maximum of 125 g)</li>
          <li class="bg-blank"><i class="fas fa-fish"></i>Salmon eggs as part of tinned pat&#233; (maximum of 20 kg)</li>
          <li class="bg-blank"><i class="fas fa-utensils"></i>Powdered milk for babies, children's food, and food required for medical purposes (a maximum of 2 kg)</li>
          <li class="bg-blank"><i class="fas fa-lemon"></i>Fresh and dried vegetable products (for personal use only)</li>
          <li class="bg-blank"><i class="fas fa-hippo"></i>Products made from protected species (i.e. elephant tusks, ivory, coral, reptile leather, furs, etc.)</li>
          <li class="bg-blank"><i class="fas fa-paw"></i>Non-meat animal products</li>
          <li class="bg-blank"><i class="fas fa-otter"></i>Some animals such as fish, frogs, & tortoises</li>
          <li class="bg-blank"><i class="fas fa-crow"></i>Protected species such as parrots, lizards, snakes, etc</li>
          <li class="bg-blank"><i class="fab fa-pagelines"></i>Some species of plants such as cacti and orchids </li>
          <li class="bg-blank"><i class="fas fa-glass-martini-alt"></i>Alcohol and alcoholic beverages restrictions:</li>
        </ul>
      </div>

      <br />



      <p class="sources">
        <b>Sources:</b><br />
        <a href="https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e"
           title="Traveller's customs in Italy"
           target="_blank" rel="noopener">https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e</a>
        <br />
        <a href="https://www.adm.gov.it/portale/ee/citizen/internet-purchases"
           title="Agenzia delle dogane e dei Monopoli - Internet purchases in Italy"
           target="_blank" rel="noopener">https://www.adm.gov.it/portale/ee/citizen/internet-purchases</a>
        <br />
      </p>
    </section>

    <section id="duties" class="duties">
      <div>
        <i class="fas fa-money-bill-alt"></i>
        <h2>Duty & Taxes</h2>
      </div>
      <p>Import duties and taxes in Italy are calculated based on the sum of the Customs Value, Insurance Amount, and Freight costs (shipping costs). This is known as CIF.</p>
      <div class="duty-formula">
        <h5 class="cif-formula">CIF Value = Customs Value + Insurance Amount + Freight Costs </h5>
      </div>

      <div class="content">
        <p>Using the CIF value, you can predict how much the duties and taxes a recipient in Italy will have to pay on a shipment from Canada.</p>
        <br />
        <h5>Thresholds</h5>
        <p>
          Italy has de minimis values for duties. This means that a shipment with a CIF value below &#8364;150 (about $250 CDN),
          no customs duties are charged. VAT is incurred on a shipment regardless of its value.
        </p>
        <p>
          <b class="emphasis">NOTE</b>: Alcoholic beverages, perfumes, and eau de toilette are always subject to VAT, duties, and excise taxes.
        </p>



        <table class="table">
          <tr>
            <td>Currency</td>
            <td>Euro (EUR) - &#8364;</td>
          </tr>

          <tr>
            <td>Duty Exemption (De minimis Value)</td>
            <td>&#8364; 150</td>
          </tr>
          <tr>
            <td>Duty Calculation Method</td>
            <td>CIF</td>
          </tr>
          <tr>
            <td>TAX (VAT)</td>
            <td>22% (Standard)
              <br />
              4%,5% and 10% (Reduced)
            </td>
          </tr>
          <tr>
            <td>Tax Exemption<br />
              (De minimis Value)</td>
            <td>
              &#8364;0 - effective July 1st, 2021
            </td>
          </tr>
          <tr>
            <td>Tax Calculation Method</td>
            <td>CIF</td>
          </tr>
          <tr style="padding: 0">
            <td style="padding: 0"></td>
            <td style="padding: 0"></td>
          </tr>
        </table>
        <br />
        <h3>Duties on Imports</h3>
        <p>The EU and Canada are covered by The Comprehensive and Economic Trade Agreement (CETA). This means that most trade duties between Canada and Italy have been eliminated.</p>

        <br />
        <br />




        <ul class="grid-items import-duties">
          <li>Candy<span>0%</span></li>
          <li>Chocolate<span>0%</span></li>
          <li>Beer<span>Standard rate: &#8364;2.99 (about $4.50 CDN) per 100 litres*</span></li>
          <li>Spirits<span>0%</span></li>
          <li>Wines<span>0%</span></li>
          <li>Tobacco<span>Variable*</span></li>
          <li>Books<span>0%</span></li>
          <li>Documents<span>0% </span></li>
          <li>Video Games & Consoles<span>0%</span></li>
          <li>Computers & Laptops<span>0%</span></li>
          <li>Tablets<span>0%</span></li>
          <li>Mobiles<span>0%</span></li>
          <li>Cameras<span>0%</span></li>
          <li>Accessories for Electronics<span>0%</span></li>
          <li>Coats<span>0%</span></li>

          <li>Beauty Products & Cosmetics<span>0%</span></li>
          <li>Jewellery<span>0%</span></li>
          <li>Shirts & Pants<span>0%</span></li>
          <li>Home Appliances<span>0%</span></li>
          <li>Toys<span>0%</span></li>
          <li>Sports Equipment<span>0%</span></li>
        </ul>
        <br />
        <p>*For independent small breweries producing up to 10,000 hectolitres per year, the duty is &#8364;1.794 per 100 litres (about $2.70 CDN)</p>
        <p>
          *Click
          <a href="http://ec.europa.eu/taxation_customs/tedb/taxDetails.html?id=4097/1561932000"
             title="Taxes in Europe Database v3 in Italy"
             target="_blank" rel="noopener">here</a> for details

        </p>

        <p class="sources">
          <b>Sources:</b><br />
          <a href="https://trade.ec.europa.eu/doclib/docs/2017/september/tradoc_156056.pdf"
             title="CETA overview in Italy"
             target="_blank" rel="noopener">https://trade.ec.europa.eu/doclib/docs/2017/september/tradoc_156056.pdf</a>
          <br />
          <a href="https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e"
             title="Traveller's customs charter in Italy "
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/documents/20182/909438/Travellers_customs-charter_4sett2019_website.pdf/d3a12aa4-c78f-4a89-9ca6-66a4275d801e</a>
          <br>
          <a href="https://www.adm.gov.it/portale/ee/citizen/internet-purchases"
             title="Agenzia delle dogane e dei Monopoli - Internet purchases in Italy"
             target="_blank" rel="noopener">https://www.adm.gov.it/portale/ee/citizen/internet-purchases</a>
          <br>
          <a href="http://ec.europa.eu/taxation_customs/tedb/taxDetails.html?id=371/1546297200"
             title="Taxes in Europe Database v3 in Italy"
             target="_blank" rel="noopener">http://ec.europa.eu/taxation_customs/tedb/taxDetails.html?id=371/1546297200</a>
          <br>
          <a href="http://ec.europa.eu/taxation_customs/tedb/taxDetails.html?id=4095/1561932000"
             title="Taxes in Europe Database v3 in Italy"
             target="_blank" rel="noopener">http://ec.europa.eu/taxation_customs/tedb/taxDetails.html?id=4095/1561932000</a>
          <br>
          <a href="https://www.pd-promex.it/it/documenti-mercati-esteri/CETASchedaSinteticaICECanada9.2017.pdf/view"
             title="CETASchedaSinteticaICECanada9.2017.pdf - Promex in Italy"
             target="_blank" rel="noopener">https://www.pd-promex.it/it/documenti-mercati-esteri/CETASchedaSinteticaICECanada9.2017.pdf/view</a>
        </p>
      </div>
    </section>

    <Insurance CountryName="Italy" runat="server" />

    <section id="additional-resources" class="additional-resources <%Response.WriteSubstitution(Secureship.Common.ShowAdmin);%>">
      <div>
        <i class="fas fa-plus"></i>
        <h2>Additional Resources</h2>
      </div>
      <div class="content">
        <ul>
          <li>N/A</li>
        </ul>
      </div>
    </section>


    <section id="faq" class="faq">
      <div>
        <i class="fas fa-question-circle"></i>
        <h2>Questions about Shipping to Italy</h2>
      </div>
      <br />
      <br />
      <h3>Can I ship to Italy?</h3>
      <p>
        Shipping to Italy from Canada can take between 2-5 business days through the fastest carriers available on the Secureship platform.
        More economical services, such as Canada Post, can take up to 2 months to complete the delivery.
      </p>
      <p>
        Find out
        <a href="/webship/rates/getestimate.aspx"
           title="How much time does it take to ship from Canada to Italy" target="_blank" rel="noopener">how fast the Secureship trusted carriers can get your shipment
          delivered to Italy</a> by getting a quote now.
      </p>
      <br />
      <div style="display: none">
        <h3>Does UPS ship to Italy?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <h3>How long does it take to ship from Canada to Italy?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <h3>How much is it to send a parcel to Italy?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <h3>What is the cheapest way to ship from Canada to Italy?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <div style="display: none">
          <h3>How do I send a package to Italy?</h3>
          <p>
            TODO ......................
          </p>
        </div>
        <br />
        <h3>How can I ship my luggage?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <h3>How do I get a FedEx shipping estimate / FedEx quote to Italy?</h3>
        <p>
          TODO ......................
        </p>
        <br />
        <h3>How do I ship gifts to Italy?</h3>
        <p>
          TODO ........................
        </p>
      </div>
    </section>
  </main>
</div>