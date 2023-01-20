import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function ManagementCard(props) {
  return (
    <div className="management-card">
      <div className="photo"></div>
      <div className="info">
        <p>name</p>
        <p>role</p>
      </div>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni
        repellendus nihil vel saepe, pariatur aliquam dolor explicabo expedita
        quasi id debitis, repudiandae ipsum error corporis rem dicta modi
        adipisci. Iusto accusantium quibusdam aliquam, vitae voluptas eius quod
        facilis. Incidunt laboriosam, explicabo unde itaque expedita esse nulla
        nobis dolores assumenda, obcaecati sint suscipit quasi corrupti debitis
        impedit eaque repellendus atque.
      </p>
    </div>
  );
}
