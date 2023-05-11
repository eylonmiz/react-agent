function NavLink({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <nav className={className} {...props} />;
}
NavLink.displayName = 'NavLink';

export { NavLink };
