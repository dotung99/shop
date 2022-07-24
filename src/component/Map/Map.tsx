import React from 'react';

function MapTop() {
    return (
        <section className="grid w-full mt-[10%]">
        <iframe className="w-full h-[500px]" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1637755481449!5m2!1sen!2snp" 
          loading="lazy"></iframe>
      </section>
    );
}
export default MapTop;