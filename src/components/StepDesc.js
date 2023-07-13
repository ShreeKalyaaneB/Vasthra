import React from "react";
import './StepDesc.css';
import process from '../../src/process.jpg';
import verifierqr from '../../src/verifierqr.jpg';
import weavers from '../../src/weavers.jpg';
const StepDesc =()=>{
    return(
<div class="stepdes-0">
    <h2 class="stepdes-1">Unveiling the Essence of Timeless Kanchipuram Silk Sarees</h2>
    <div class="stepdes-2">
        <div class="stepdes-3">
            <div class="stepdes-4"><img src={weavers} loading="lazy" alt="Authentic Handlooms" title="Explore a variety of centuries old handloom weaving patterns" width="200" height="200" class="stepdes-5" /></div>
            <p class="stepdes-6">Traditional Weaves</p>
        </div>
        {/* <div class="stepdes-7">
            <div class="stepdes-8"><img src="https://kankatala-static.gumlet.io/media/wysiwyg/home-page/kankatala-legacy-kan4.png" loading="lazy" alt="legacy" title="Associate yourself with a legacy saree brand which is trusted by all" width="200" height="200" class="stepdes-9" /></div>
            <p class="stepdes-10">Legacy since 1943</p>
        </div> */}
         <div class="stepdes-16">
            <div class="stepdes-17"><img src={process} width="200" height="200" class="stepdes-18" /></div>
            <p class="stepdes-19">Authentic Kanchipuram<br class="stepdes-20" />Silk</p>
        </div>
        <div class="stepdes-11">
            <div class="stepdes-12"><img src={verifierqr} loading="lazy" alt="handpicked" title="Enjoy a specially curated collection of handpicked sarees" width="200" height="200" class="stepdes-13" /></div>
            <p class="stepdes-14">Verified By<br class="stepdes-15" />Web2 to Web3 Verifiers</p>
        </div>
       
    </div>
</div>

    )
}
export default StepDesc;