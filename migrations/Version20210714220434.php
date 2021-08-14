<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714220434 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions ADD specialties_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47EE3AC3692 FOREIGN KEY (specialties_id) REFERENCES specialties (id)');
        $this->addSql('CREATE INDEX IDX_34F1D47EE3AC3692 ON missions (specialties_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47EE3AC3692');
        $this->addSql('DROP INDEX IDX_34F1D47EE3AC3692 ON missions');
        $this->addSql('ALTER TABLE missions DROP specialties_id');
    }
}
