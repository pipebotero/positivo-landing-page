import React from "react";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import "./Privacy.scss";

function Privacy(props) {
  return (
    <div className="container">
      <p>
        <strong>POLÍTICA DE PRIVACIDAD</strong>
      </p>
      <p>
        El presente Política de Privacidad establece los términos en que
        Positivo usa y protege la información que es proporcionada por sus
        usuarios al momento de utilizar su aplicación móvil. Esta compañía está
        comprometida con la seguridad de los datos de sus usuarios. Cuando le
        pedimos llenar los campos de información personal con la cual usted
        pueda ser identificado, lo hacemos asegurando que sólo se empleará de
        acuerdo con los términos de este documento. Sin embargo esta Política de
        Privacidad puede cambiar con el tiempo o ser actualizada por lo que le
        recomendamos y enfatizamos revisar continuamente esta página para
        asegurarse que está de acuerdo con dichos cambios.
      </p>
      <p>
        <strong>Información que es recogida</strong>
      </p>
      <p>
        Nuestra aplicación móvil podrá recoger información personal por ejemplo:
        Nombre, información de contacto como su número de celular,
        dirección de correo electrónico y ubicación en tiempo real.
      </p>
      <p>
        <strong>Uso de la información recogida</strong>
      </p>
      <p>
      Nuestra aplicación móvil emplea la información con el fin de proporcionar el
        mejor servicio posible, particularmente para mantener un registro de
        usuarios, de viajes, mejorar la comunicación entre pasajeros y conductores y
        optimizar nuestros servicios. Es posible que sean enviados correos electrónicos
        con futuras actualizaciones de nuestros servicios, respuestas a PQRSD (Petición, Queja, Reclamo, Sugerencia, Denuncia)
        y otra información que consideremos relevante
        para usted o que pueda brindarle algún beneficio, estos correos
        electrónicos serán enviados a la dirección que usted proporcione y
        podrán ser cancelados en cualquier momento.
      </p>
      <p>
        Cuando se obtiene información sobre la ubicación actual de los usuarios, se realiza
        y se usa de forma diferente para pasajeros y conductores. Cuando un <b><i>pasajero</i></b> permite
        a nuestra aplicación móvil acceder a su ubicación, la recoleccion de esta información solo
        se hace cuando la aplicación se ejecuta en primer plano, es decir, mientras mantenga la aplicación
        activa, permitiendonos usar su ubicación para establecer el punto de partida del viaje.
        Cuando un <b><i>conductor</i></b> permite a nuestra aplicación móvil acceder a su ubicación, 
        preferiblemente debe otorgar el permiso para que accedamos a su ubicacón en todo momento, lo
        que implica que si la aplicación esta inactiva, aún así podamos acceder a esta información.
        La razón por la que pedimos que nos proporcione esta información de esta manera, se debe a diferentes
        usos, como por ejemplo, cuando un pasajero pide un servicio y usted como conductor no tienen
        la aplicación activa en el momento, aún así podamos avisarle sobre un viaje cercano, otro ejemplo se
        aplica cuando usted como conductor aceptó la petición de viaje del pasajero, entonces nuestra
        aplicación móvil usa el acceso a su ubicación en segundo plano, que incluye casos en usted no tenga
        activa nuestra aplicación o este usando otra aplicación, para brindar su ubicación al pasajero
        y que él pueda conocer en donde está y cuanta distancia le falta por llegar al punto inicial del recorrido.
      </p>
      <p>
        Positivo está altamente comprometido para cumplir con el compromiso de
        mantener su información segura. Usamos los sistemas más avanzados y los
        actualizamos constantemente para asegurarnos que no exista ningún acceso
        no autorizado.
      </p>
      <p>
        <strong>Almacenamiento de Datos</strong>
      </p>
      <p>
        El almacenamiento de datos se realiza en los dispositivos de los usuarios
        y se usa para facilita los futuros accesos a la aplicación móvil, una vez
        inicie sesión y se autentique. Los datos que se almacenan son solo los necesarios
        para que la aplicación permita ingresar, como puede ser un token de acceso, también se
        almacena el rol del usuario, si es pasajero o conductor, entre otros datos que nos ayudan
        mejorar la experiencia del usuario en nuestra aplicación móvil. 
      </p>
      <p>
        Usted puede borrar estos datos cuando desee, pero tenga en cuenta que borrarlos implica que
        tendrá que volver a iniciar sesión con su móvil.
      </p>
      <p>
        <strong>Control de su información personal</strong>
      </p>
      <p>
        Esta compañía no venderá, cederá ni distribuirá la información personal
        que es recopilada sin su consentimiento, salvo que sea requerido por un
        juez con un orden judicial.
      </p>
      <p>
        Positivo Se reserva el derecho de cambiar los términos de la presente
        Política de Privacidad en cualquier momento.
      </p>
    </div>
  );
}

Privacy.propTypes = {
  src: PropTypes.string,
};

export default Privacy;
