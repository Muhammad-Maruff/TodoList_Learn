"use client"

export default function Home () {
  return (
    <>
        <div className="bg-success-background border border-success-border p-4 rounded font-sans">
            <span className="font-bold text-success-foreground">Data berhasil disimpan</span>
        </div>

        <div className="bg-error-background border border-error-border p-4 rounded">
            <span className="font-bold text-error-foreground">Data gagal disimpan</span>
        </div>

        <div className="bg-warning-background border border-error-border p-4 rounded">
            <span className="font-bold text-warning-foreground">Data sedang dalam perbaikan</span>
        </div>

        <button className="bg-primary hover:bg-primary-hover text-primary-light rounded px-4 py-2 font-semibold transition-colors">Tekan saya</button>

    </>
  )
}




