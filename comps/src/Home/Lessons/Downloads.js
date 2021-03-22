import React from 'react';
import { Link } from '../../constant';
function Downloads() {
    return(
        <section>
            <article id="h-downloads">
            <a className="link-clone" href={Link.all} download>Clone Files</a>
            </article>
        </section>
    );
}

export default Downloads;